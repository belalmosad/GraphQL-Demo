const { ApolloServer } = require("apollo-server-express");

const server = new ApolloServer({
    resolvers,
    typeDefs
})