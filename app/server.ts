/** dotenv */
import 'dotenv/config'

/** express */
import express from 'express'

/** connection how db */
import connectionDb from './settings/db'

/** server */
const app = express()

connectionDb
  .then(() => {
    app.listen(process.env.PORT_APP, () =>
      console.log('app running in port 3001 🚀🚀🚀')
    )
  })
  .catch(() => console.log('connection with database failed ❌❌❌'))
