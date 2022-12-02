/** dotenv */
import 'dotenv/config'

/** express */
import express, { json } from 'express'

/** routers */
import routerApp from './routers'

/** connection how db */
import connectionDb from './settings/db'

/** server */
const app = express()
app.use(json())
app.use(routerApp)

connectionDb
  .then(() => {
    app.listen(process.env.PORT_APP, () =>
      console.log('app running in port 3001 🚀🚀🚀')
    )
  })
  .catch(() => console.log('connection with database failed ❌❌❌'))
