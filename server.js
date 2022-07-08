const {ApolloServer, gql} = require('apollo-server');
const fs = require("fs");
const CommentDataSource = require('./datasource/comment.datasource');
const PostDataSource = require('./datasource/post.datasource');
const resolvers = require('./resolvers/index');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@cluster0.mawss.mongodb.net/?retryWrites=true&w=majority')
.then(() => {console.log('DB Connected Successfully')})
.catch(error => {console.log(error)});

let  schema = fs.readFileSync('./typeDefs.graphql', {encoding: 'utf-8'});
const typeDefs = gql(schema);

const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
        post: new PostDataSource(),
        comment: new CommentDataSource()
    })
})

server
 .listen({ port: 4000 })
 .then(({ url }) => console.log(`app running at ${url}`));
