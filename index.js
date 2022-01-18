const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/type-defs")
const { resolvers } = require("./schema/resolvers")

// typeDefs = Everytype, piece of code you define in graphQL will exist in typeDefs
// resolvers = Functions that resolve those types, make call to API, etc will be enclosed in the variable resolvers. 
//             Functions that deal with the data
const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`Your API is running at ${url}`)
})