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
        post: (_, args) => {return posts.find((post) => {return post.id == args.id})},
        posts : () => {return posts}
    },
    Mutation: {
        addPost: (_, args) => {
            let newPost = {id: args.id, title: args.title, content: args.content}
            posts.push(newPost);
            return newPost
        }, 
        deletePost: (_, args) => {
            return posts.filter((post) => {return post.id != args.id})
        },
        updatePost: (_, args) => {
            let tobeUpdated = posts.findIndex((post) => post.id == args.id);
            let newpost = {id: args.id, title: args.title, content: args.content}
            posts[tobeUpdated] = newpost
            return newpost
        }
    }
}
const server = new ApolloServer({
    resolvers,
    typeDefs
})

server
 .listen({ port: 4000 })
 .then(({ url }) => console.log(`app running at ${url}`));
