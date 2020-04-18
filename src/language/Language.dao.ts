import {MongoHelper} from "../core/helper/Mongo.helper";
import {ConfigHelper} from "../core/helper/Config.helper";
import {Common} from "wesoar-entity";

const LanguageModel = require('../models/Language.model');
export class LanguageDao {

    constructor() {
     }

      list() {
        return new Promise((resolve, reject) => {
                LanguageModel.find({},(err:any, item:any) => {
                console.log("item="+item)
                if(err) 
                {
                console.log(err);
                throw err;
                }
                resolve(item)
                });
                });
              }
    
}