import Product from '../../models/Product'


export const productsResolvers = {
  Query: { 
    Products(){
      return  Product.find()
    },
    async ProductById(root, {_id}){
      console.log(_id)
      const productSearch =  await Product.findById(_id)
      console.log(productSearch)

      return productSearch
    }
  },

  
  Mutation: {
    async createProduct(_,{ input }){
      const newProduct = new Product(input)
      await newProduct.save()
      return newProduct
    },
    async updateProduct(_,{ _id , input}){
      return await Product.findByIdAndUpdate(_id, input,{ new: true })
    }
  }
}