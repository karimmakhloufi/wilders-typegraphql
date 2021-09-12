import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Wilder {
    name: String
    city: String
    skills: [Skill]
  }

  type Skill {
    name: String
    votes: Int
  }

  type Query {
    wilders: [Wilder]
  }
`;

const wilders = [
  {
    name: "Alain",
    city: "Paris",
    skills: [
      {
        name: "NodeJS",
        votes: 3,
      },
    ],
  },
  {
    name: "Bernadette",
    city: "Paris",
    skills: [
      {
        name: "NodeJS",
        votes: 0,
      },
    ],
  },
  {
    name: "Charles",
    city: "Paris",
    skills: [
      {
        name: "React",
        votes: 2,
      },
    ],
  },
  {
    name: "Delphine",
    city: "Paris",
    skills: [
      {
        name: "React",
        votes: 3,
      },
    ],
  },
  {
    name: "Edouard",
    city: "Bordeaux",
    skills: [
      {
        name: "VueJS",
        votes: 0,
      },
    ],
  },
];

const resolvers = {
  Query: {
    wilders: () => wilders,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
