//const UserModel = require('../models/User/User.model');
const UserSchema = require('../models/User/User.model');
const OrganizationModel = require('../models/Organization/Organization.model');
const mongo = require('mongoose');

import {MongoHelper} from "../core/helper/Mongo.helper";

//const UserModel= mongooseuser.model('user', UserSchema);
export class UserDao {

    constructor() {
    }
   async user(args:any,context:any) {
     
        return new Promise((resolve, reject) => {
       OrganizationModel.findOne({'domain':context.domain},async function(err:any, item:any) {
            if(err) {
                    console.log(err);
                    throw err;
             }
             else{
                try {
              
                    const myDB = mongo.connection.useDb(item.techData.dbConfiguration.dbName);
                    const UserModel = myDB.model('user', UserSchema);
                    console.log(UserModel.db.name)
                    UserModel.findOne({$or: [ { firstName: args.value}, { email: args.value }, { mobileNumber: args.value } ]},(err:any, item:any) => {
                    if(err) {
                        console.log(err);
                        throw err;
                    }
                    //console.log(uservalue)
                     resolve(item)
            });

                    } catch (err) {
                        console.error(`Unable to connect to Mongo!`, err);
                    }
             }
           
        });
            // UserModel.findOne({$or: [ { firstName: args.value}, { email: args.value }, { mobileNumber: args.value } ]},(err:any, item:any) => {
            //     console.log("item="+item)
            //     if(err) {
            //             console.log(err);
            //             throw err;
            //     }
            //     resolve(item)
            // });
        });
    }
   
   

}