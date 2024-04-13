import axios from 'axios';
const api = 'https://gekoeducation.com/api/contact/';

export async function postData(data) {
  try {
    const response = await axios.post(api, data)

    console.log('Response from API:', response.data)
    return response.data 
  } catch (error) {
    if (error.response) {
      console.error(
        'Server responded with error status:',
        error.response.status,
      )
      console.error('Error response data:', error.response.data)
    } else if (error.request) {
      console.error('No response received from server.')
    } else {
      console.error('Error:', error.message)
    }
    throw error
  }
}
