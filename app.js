const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const port = 3000;

const schema = buildSchema(`
  type Query {
    hello: String,
    okay: String
  }
`);

const root = {
    hello: () => 'Hello world!',
    okay: () => 'This is okay'
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));