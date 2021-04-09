import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true,
})
  .then( db => console.log('Database connected'))
  .catch( error => console.log(error))

