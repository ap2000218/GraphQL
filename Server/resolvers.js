import { books } from "./data.js";
export const resolvers = {
    Query: {
        books: () => books,
    },
};

