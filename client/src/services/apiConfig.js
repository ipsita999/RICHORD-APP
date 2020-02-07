import Axios from 'axios'

// const JwtToken = localStorage.getItem('token') || null

const getToken = () => localStorage.getItem('token') 

// const clearToken = () => localStorage.clear()
// const setToken = token => localStorage.setItem('token', token)

const JwtToken = getToken()

// const BaseUrl =
//   window.location.hostname === 'localhost'
//     ? process.env.REACT_APP_DEV
//     : process.env.REACT_APP_PROD

// export const Api = Axios.create({
//   baseURL: BaseUrl,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     Authorization: `Bearer ${JwtToken}`
//   }
// })

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
