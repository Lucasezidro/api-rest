import fastify from 'fastify'
import { env } from '../env'
import { TransactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(TransactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Runing')
  })
