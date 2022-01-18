// gql allows us to write GQL code and translate it to something JS can understand
const {gql} = require('apollo-server')

// Every GraphQL schema start with a specific type, called `Query`. Defining queries for the FE

//  "!" Exlamation mark makes a field required
//  a type inside an Array [User], instead means we can return a list of that type of data.
const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`

module.exports = {typeDefs}