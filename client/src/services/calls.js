import api from './apiConfig'

export const getTrackById = async id => {
  try {
    const resp = await api.get(`/tracks/track/${id}`)
    return resp.data
  } catch (error) {
    console.log('error getting track')
    throw error
  }
}

export const deleteTrack = async (id) => {
  try {
    const resp = await api.delete(`/tracks/track/${id}`)
    return resp.data
  } catch (error) {
    console.log('error getting track')
    throw error
  }
}

export const getTracks = async () => {
  try {
    const resp = await api.get('/tracks')
    return resp.data.tracks
  } catch (error) {
    throw (error)
  }
}