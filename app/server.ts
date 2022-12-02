/** dotenv */
import 'dotenv/config'

/** express */
import express from 'express'

/** server */
const app = express()

app.listen(process.env.PORT_APP, () => console.log('app running in port 3001'))
