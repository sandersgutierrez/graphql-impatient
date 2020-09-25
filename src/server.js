'use strict'

const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        helloDominiCode: String!
    }
`

const resolvers = {
    Query: {
        helloDominiCode() {
            return 'Hola gente bella de DominiCode'
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
})

server.listen(3030).then(() => console.log(`Server listening`))
