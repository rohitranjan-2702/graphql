const { UserList, friends } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USERS RESOLVER
    users() {
      return UserList;
    },
    friendList() {
      return friends;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    // MOVIES RESOLVER
    movies: () => {},
    movie: () => {},
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = {
        id: UserList.length + 1,
        username: args.username,
        age: args.age,
      };
      UserList.push(user);
      return user;
    },
    updateUser: (parent, args) => {
      const { id, newUsername } = args.input;
      user = _.find(UserList, { id: Number(id) });
      if (user) user.username = newUsername;
      return user;
    },
  },
};

module.exports = { resolvers };

// console.log(UserList);
