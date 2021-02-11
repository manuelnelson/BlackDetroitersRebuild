require('dotenv').config()
// import axios from 'axios';
const axios = require('axios');
const axiosInstance = axios.default.create({
  headers: {
    'X-Master-Key': process.env.JSONKEY,
    'Content-Type': 'application/json',
    'X-Bin-Private': false,
    'X-Collection-Id': '60254bd5435c323ba1c4d8ef'
  }
})


exports.handler = async function(event, context, callback) {
  try {
    const emailToSignup = JSON.parse(event.body).email;
    console.log("🚀 ~ file: jsonbin.js ~ line 27 ~ exports.handler=function ~ emailToSignup", emailToSignup)
    let response = await axiosInstance.post('https://api.jsonbin.io/v3/b',{
      email:emailToSignup
    });
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}