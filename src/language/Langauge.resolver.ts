import {LanguageDao} from "./Language.dao";
import {ApolloError} from 'apollo-server-express';
import {CommonFunction} from "../core/commonfunction/commonfunction";

export const languageResolver = {
    languages: async (parent:any, args:any, context:any) => {
        try {
            const dao = new LanguageDao();
            var languagelist= await dao.list();
            if(languagelist=='')
            {
              return new ApolloError("No record found","300")
            }
            else{
            return languagelist;
            }
        } catch (err) {
            throw err;
        }
    }
};
