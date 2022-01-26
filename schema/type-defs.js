// gql allows us to write GQL code and translate it to something JS can understand
const {gql} = require('apollo-server')

// Every GraphQL schema start with a specific type, called `Query`. Defining queries for the FE

//  "!" Exlamation mark makes a field required
//  a type inside an Array [User], instead means we can return a list of that type of data.

// enum are used to validate what you can return. Nationality was before of type String, now is type Nationality
// an enum which that define exactly what values can be returned from the GraphQL API


// In order to get favoriteMovies you don't want to add this info in the mock data, as it might not be in the database strucutr
// Instead a resolver should take care of it..
const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }
  
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  
  enum Nationality {
    GERMANY
    CHILE
    CANADA
    BRAZIL
    INDIA
  }
`

module.exports = {typeDefs}