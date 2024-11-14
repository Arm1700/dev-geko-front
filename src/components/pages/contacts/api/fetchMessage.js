import axios from 'axios';

// Endpoint URL
const api = 'https://dev.gekoeducation.com/api/contact/';
// const api = 'http://127.0.0.1:8000/api/contact/';

export async function postData(data) {
  try {
    // Log data being sent
    console.log('Data being sent to the API:', data);

    // Sending the POST request
    const response = await axios.post(api, data, {
      headers: {
        'Content-Type': 'application/json', // Ensure correct header
      },
    });

    console.log('Response from API:', response.data); // Log success
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server error
      console.error('Server responded with error status:', error.response.status);
      console.error('Error response context:', error.response.data); // Detailed error info
    } else if (error.request) {
      // No response from the server
      console.error('No response received from server.');
    } else {
      // General error (e.g., network issues)
      console.error('Error:', error.message);
    }
    throw error;
  }
}
