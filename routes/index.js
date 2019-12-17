const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)

router.get('/users', controllers.getAllUsers)
router.get('/tracks', controllers.getAllTracks)

router.get('/tracks/track/:id', controllers.getTrackById)

router.get('/users/:id/tracks', restrict, controllers.getUserTracks)

router.delete('/tracks/track/:id', controllers.deleteTrack)

router.post('/tracks', restrict, controllers.createTrack)

router.put('/tracks/:id', restrict, controllers.editTrack)

module.exports = router
