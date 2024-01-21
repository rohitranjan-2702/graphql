const UserList = [
  {
    id: 1,
    username: "user1",
    age: 11,
    nationality: "INDIA",
    friends: [
      {
        id: 2,
        username: "user2",
        age: 22,
        nationality: "AMERICA",
      },
      {
        id: 4,
        username: "user4",
        age: 24,
        nationality: "AUSTRALIA",
      },
    ],
  },
  {
    id: 2,
    username: "user2",
    age: 22,
    nationality: "AMERICA",
  },
  {
    id: 3,
    username: "user3",
    age: 13,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        username: "user2",
        age: 22,
        nationality: "AMERICA",
      },
    ],
  },
  {
    id: 4,
    username: "user4",
    age: 24,
    nationality: "AUSTRALIA",
  },
];

module.exports = { UserList };
