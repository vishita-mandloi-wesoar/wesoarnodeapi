import {IResolvers} from "graphql-tools";
import {DesignationDao} from "./Designation.dao";

export const designationResolver = {
    designations: async (parent:any, args:any, context:any) => {
        try {
            const dao = new DesignationDao();
            return await dao.list();

        } catch (err) {
            throw err;
        }
    }
};
