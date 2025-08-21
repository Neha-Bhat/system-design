const data = {
    authors: [
        {id: 1, name: 'Neha',booksIDs: ['101', '102']},
        {id: 2, name: 'Dyuthi',booksIDs: ['103']}
    ],

    books: [
        {id: '101', title: 'MidWinter Days', pubYear: 2025, authorID: 1},
        {id: '102', title: 'MidMonsoon Days', pubYear: 2025, authorID: 1},
        {id: '103', title: 'MidSummer Days', pubYear: 2025, authorID: 2}
    ]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            console.log(parent)
            return data.authors.find(authDetail => authDetail.id === parent.authorID)
        },
    },
    Author: {
        book: (parent, args, context, info) => {
            return data.books.filter(bookDetails => parent.booksIDs.includes(bookDetails.id))
        }
    },

    Query: {
        authors: (parent, args, context, info) => {
            return data.authors
        },
        books: (parent, args, context, info) => {
            return data.books
        }
    },

    Mutation: {
        addBook: (parent, args, context, info) => {
            const newBook = {...args, id: (data.books.length+1).toString()}
            data.books.push(newBook)
            return newBook
        }
    }
}