import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL is awesome!!!");
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(8000, () => console.log("Running server on port localhost:8000/graphql"));