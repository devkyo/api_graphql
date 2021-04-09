export const productType =  `

  type Product {
    _id: ID
    name: String
    category: String
    price: Float
    imgURL: String
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(_id: ID!, input: ProductInput): Product
    deleteProduct(_id: ID!, input: ProductInput): Product
  }



  input ProductInput {
    name: String
    category: String
    price: Float
    imgURL: String
  }

  
`