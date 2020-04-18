
import {IResolvers} from "graphql-tools";
import {UserDao} from "./User.dao";

export const userResolver = {
    user: async (parent:any, args:any, context:any) => {
        try {
           
            const dao = new UserDao();
            var aa:any= await dao.user(args,context);
            console.log(aa.firstName)
            return aa;
            
            // return await dao.user(args,context);

        } catch (err) {
            throw err;
        }
    }
};
