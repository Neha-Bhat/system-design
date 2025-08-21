export const typeDefs = `#graphql

    type Author {
    id: ID!
    name: String!
    bookIDs: [String]
    book: [Book]
    }

    type Book {
    id: ID!
    title: String!
    pubYear: Int
    author: Author
    authorID: Int
    }

    type Query {
        authors: [Author]
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, pubYear: Int, authorID: ID!, id: ID!): Book!
    }
`