export const query =  `
  type Query {     
    Products: [Product]
    Users: [User]
    ProductById(_id: ID!): Product

  }
`