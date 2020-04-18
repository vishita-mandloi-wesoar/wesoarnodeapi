
import {IResolvers} from "graphql-tools";
import {OrganizationDao} from "./Organization.dao";
import {CommonFunction} from "../core/commonfunction/commonfunction";
import {ApolloError} from 'apollo-server-express';

const {UserInputError} = require('apollo-server-express');
export const organizationResolver = {
    organization: async (parent:any, args:any, context:any) => {
        try {
            const dao = new OrganizationDao();
            ///this is how we will display the input error
            // if (args.domain !== 'expected') {
            //     throw new UserInputError('Please enter valid domain name', {
            //       invalidArgs: Object.keys(args),
            //     });
            //   }
            //   else{
            // return await dao.organization(args);
            //   }
            var organizationdata=await dao.organization(args);
            if(organizationdata==null)
            {
               var error= CommonFunction.i18nconverter("no_record_found",context.language)
               return new ApolloError(error+"",'300')
                }
            else{
            return organizationdata;
            }
            
        } catch (err) {
            throw err;
        }
    }
};
