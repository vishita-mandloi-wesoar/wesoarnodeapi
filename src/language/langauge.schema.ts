import {gql} from "apollo-server-express";

export const languageTypeDefs = gql`
    type Language {
        _id: String!
        name: String!
        keyName: String!
        shortName: String
    }
   
    extend type Query {
        languages: [Language]
    }`;

    //query{languages{name,_id}}
  