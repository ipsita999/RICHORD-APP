import Axios from 'axios'

const getToken = () => localStorage.getItem('token')

const JwtToken = getToken()

let apiUrl

const apiUrls = {

  production: 'https://git.heroku.com/richord-music-app.git',
  development: 'http://localhost:3000/api'

}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

const api = Axios.create({
	baseURL: apiUrl,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${JwtToken}`
	}
})

export default api
