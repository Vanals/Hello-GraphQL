const {UserList, MovieList} = require('../MockData')

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList
    },
    // Resolver which takes and argument.
    // parent = ?
    user: (parent, args) => {
      const id = args.id

      const user = UserList.filter(user => {
        return user.id === Number(id)
      })

      return user[0]
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList
    },
    movie: (parent, {name}) => {
      // You can either do args.X(user example) or destructure like doing here
      const movie = MovieList.filter(movie => {
        return movie.name === name
      })

      return movie[0]
    }
  }
}

module.exports = { resolvers }