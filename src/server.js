'use strict'

const fs = require('fs')
const { join } = require('path')
const { ApolloServer, gql } = require('apollo-server')

const schema = fs.readFileSync(join(__dirname, 'schema.gql'), 'utf8')
const typeDefs = gql(schema)
const port = process.env.PORT || 3000

const users = [
    {
        name: 'Julian',
        email: 'info@julianduque.co',
        status: 'FAILED',
    },
    {
        name: 'Sanders',
        email: 'ing.sanders@gmail.com',
        status: 'PASSED',
    },
]

const courses = [
    {
        name: 'DominicCode 10K',
        students: users,
    },
]

const resolvers = {
    Query: {
        helloDominiCode() {
            return 'Hola gente bella de DominiCode'
        },
        listUsers(_, args) {
            const { status } = args
            if (!status) return users

            return users.filter((u) => u.status === status)
        },
        listCourses() {
            return courses
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
})

server.listen(port).then(() => console.log(`Server listening`))
