import {gql} from "apollo-server-express";

export const basicQuery = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`;