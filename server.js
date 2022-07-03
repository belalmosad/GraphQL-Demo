const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");
const typeDefs = gql

const resolvers = {
    Query: {

    }
}
const server = new ApolloServer({
    resolvers,
    typeDefs
})