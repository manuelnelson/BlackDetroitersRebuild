import { google } from 'googleapis'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

const getClient = ({ scopes }) => {
  return google.auth.getClient({
    credentials: {
        client_email:process.env.GOOGLE_SERVICE_EMAIL, 
        private_key:process.env.GOOGLE_SERVICE_PRIVATEKEY, 
    }, 
    scopes: scopes,
  })
}

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({
    version: 'v4',
    auth: client,
  })
}

const addToCol = async (range, emailAddress) => {
  const sheets = await authorizeSheets()
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: '1S4sDVyqMll-_ybLDwsS0j-9mAI61QDEAXWZ9hiSkW4U',
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[emailAddress]],
        },
      },
      (err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      }
    )
  })
}

exports.handler = async function(event, context, callback) {
  try {
    const emailToSignup = JSON.parse(event.body).email
    const sheetsRes = await addToCol('Local!F2', emailToSignup) // don't resolve though. Not going to fix if failure.
    return {
      statusCode: sheetsRes.status,
      body: JSON.stringify(sheetsRes),
    }
  } catch (err) {
    console.log(err)
    return { statusCode: 500, body: err.toString() }
  }
}