import {gql} from "apollo-server-express";

export const userTypeDefs = gql`
    type User {
        _id: String!
        firstName: String!
        email: String!
        mobileNumber : String!
        domain : String!
    }
 
    extend type Query {
        user(value: String!): User
    }`;

    //query{user(value:"8109816070"){firstName}}