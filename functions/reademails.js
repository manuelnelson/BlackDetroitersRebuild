require('dotenv').config()
// import axios from 'axios';
const axios = require('axios');
const axiosInstance = axios.default.create({
  headers: {
    'X-Master-Key': process.env.JSONKEY,
    'Content-Type': 'application/json',
  }
})


exports.handler = async function(event, context, callback) {
  try {
    console.log("made it");
    let response = await axiosInstance.get('https://api.jsonbin.io/v3/c/60254bd5435c323ba1c4d8ef/bins/1');
    console.log("🚀 ~ file: reademails.js ~ line 15 ~ exports.handler=function ~ response", response.data);
    let emails = response.data.map(x => x.metaData);
    console.log("3");
    return {
      statusCode: response.status,
      body: JSON.stringify(emails),
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}