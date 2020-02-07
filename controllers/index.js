const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Track } = require('../models')

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {

	try {
		console.log(req.body)
		const { username, email, password } = req.body
		const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
		const user = await User.create({
			username,
			email,
			password_digest
		})
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		}
		const token = jwt.sign(payload, TOKEN_KEY)
		return res.status(201).json({ user, token })
	} catch (error) {
		console.log(
			'You made it to the signUp controller, but there was an error'
		)
		return res.status(400).json({ error: error.message })
	}
}

const signIn = async (req, res) => {

	try {
		console.log(req.body)
		const { username, password } = req.body
		const user = await User.findOne({
			where: {
				username
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				username: user.username,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Invalid Credentials')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll()
		return res.status(200).json({ users })
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getAllTracks = async (req, res) => {
	console.log("inside controller")
	try {
		const tracks = await Track.findAll()
		return res.status(200).json({ tracks })
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const createTrack = async (req, res) => {
	try {
		const newTrack = await Track.create(req.body)
		return res.status(201).json({
			newTrack
		})
	} catch {
		return res.status(500).send(error.message)
	}
}

const getUserTracks = async (req, res) => {
	try {
		const { id } = req.params
		const tracks = await Track.findAll({
			where: { user_id: id }
		})
		return res.status(200).json({ tracks })
	} catch (error) {
		return res.status(500).send(error.message)
	}

}


const getTrackById = async (req, res) => {
	try {
		const { id } = req.params
		const track = await Track.findOne({
			where: { id: id }
		})
		if (track) {
			return res.status(200).json({ track })
		}
		return res.status(404).send('Item with the specified ID does not exists')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const editTrack = async (req, res) => {
	try {
		const { id } = req.params
		const track = req.body
		const updated = await Track.update(track, {
			where: { id: id }
		})

		if (updated) {
			const updatedTrack = await Track.findOne({ where: { id: id } })
			return res.status(202).json({ track: updatedTrack })
		}
		throw new Error('Track not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const deleteTrack = async (req, res) => {
	try {
		console.log(req.params)
		const { id } = req.params
		const deleted = await Track.destroy({
			where: { id: id }
		})
		if (deleted) {
			return res.status(202).send('Item deleted')
		}
		throw new Error('Item not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	signUp,
	signIn,
	getAllUsers,
	getAllTracks,
	editTrack,
	getUserTracks,
	getTrackById,
	deleteTrack,
	createTrack
}
