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
  type Query {
    users: [User!]!
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
