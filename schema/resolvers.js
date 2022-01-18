const {UserList} = require('../MockData')

const resolvers = {
  Query: {
    users() {
      return UserList
    }
  }
}

module.exports = { resolvers }