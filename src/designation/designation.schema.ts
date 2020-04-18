import {gql} from "apollo-server-express";

export const designationTypeDefs = gql`
    type Designation {
        _id: String!
        name: String!
        keyName: String!
     
    }
  
    extend type Query {
        designations: [Designation]
    }`;