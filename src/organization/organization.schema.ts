import {gql} from "apollo-server-express";

export const organizationTypeDefs = gql`
    type Organization {
        _id: String!
        name: String!
        keyName: String!
        domain : String!
    }
 
    extend type Query {
        organization(domain: String!,language:String!): Organization
    }`;

    //query{organization(domain:"wesoar.com"){firstName}}