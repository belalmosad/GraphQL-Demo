const {ApolloServer, gql} = require('apollo-server');
const fs = require("fs");
const path = require("path");

let  schema = fs.readFileSync('./typeDefs.graphql', {encoding: 'utf-8'});
const typeDefs = gql(schema);

const posts = [
    {
        id: 1,
        title: 'post 1',
        content: 'post 1 content'

    },
    {
        id: 2,
        title: 'post 2',
        content: 'post 2 content'

    },
    {
        id: 3,
        title: 'post 3',
        content: 'post 3 content'

    },
]

const resolvers = {
    Query: {
        post: (_, id) => {posts.find((post) => {return post.id == id})}
    }
}
const server = new ApolloServer({
    resolvers,
    typeDefs
})

server
 .listen({ port: 4000 })
 .then(({ url }) => console.log(`app running at ${url}`));
