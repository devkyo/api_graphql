import express from 'express'
import morgan from 'morgan'
import { graphqlHTTP } from 'express-graphql'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup';
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

import  schema from './graphql/schema'

const app = express();
createRoles();

app.use(morgan('dev'));




app.use('/graphql',graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true
}))

app.use(express.json())




app.use('/api/products',productsRoutes)
app.use('/api/auth', authRoutes)

export default app




