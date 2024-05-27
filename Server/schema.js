export const typeDefs = `#graphql
type books 
    {
        title: String
        author: String
    },
  
    type Query {
        books: [books]
      }
`

