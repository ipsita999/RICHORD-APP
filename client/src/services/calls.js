import api from './apiConfig'

// export const getItems = async () => {
//   try {
//     const resp = await api.get('/items')
//     return resp.data.items
//   } catch (error) {
//     throw error
//   }
// }

export const getTrackById = async id => {
  try {
    const resp = await api.get(`/tracks/track/${id}`)
    return resp.data
  } catch (error) {
    console.log('error getting track')
    throw error
  }
}

// export const createItem = async item => {
//   try {
//     const resp = await api.post('/items', item)
//     return resp
//   } catch (error) {
//     throw error
//   }
// }

// export const updateItem = async (id, item) => {
//   try {
//     const resp = await api.put(`/items/${id}`, item)
//     return resp.data
//   } catch (error) {
//     throw error
//   }
// }

// export const deleteItem = async id => {
//   try {
//     const resp = await api.delete(`/items/${id}`)
//     return resp.data
//   } catch (error) {
//     throw error
//   }
// }

export const getTracks = async () => {
  try {
      const resp = await api.get('/tracks')
      return resp.data
  } catch (error) {
      throw (error)
  }
}
// export const getItems = async () => {
//   try {
//     const resp = await api.get('/items')
//     return resp.data.items
//   } catch (error) {
//     throw error
//   }
// }