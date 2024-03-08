const { gql } = require("apollo-server");

/* The `const typeDefs = gql` is defining the schema for a GraphQL API using the Apollo Server library
in JavaScript. */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

  #  The type Query defines the available queries that can be made to retrieve data from the API.
  type Query {
    users: [User!]! # query: users returns an array of User objects
    # ! means that the field is required
    user(id: ID!): User!
    friendList: [User!]
    movies: [Movie!]!
    movie(name: String!): Movie! # query: movie returns a single Movie object
  }

  input updateUserInput {
    id: ID!
    newUsername: String!
  }

  # The type Mutation defines the available mutations that can be made to change data in the API.
  type Mutation {
    createUser(
      username: String!
      age: Int!
      nationality: Nationality = INDIA # default value
    ): User!
    updateUser(input: updateUserInput!): User
  }

  enum Nationality {
    INDIA
    AMERICA
    CANADA
    AUSTRALIA
    BRITISH
  }
`;

module.exports = { typeDefs };
