import {MongoHelper} from "../core/helper/Mongo.helper";
import {ConfigHelper} from "../core/helper/Config.helper";
import {Common} from "wesoar-entity";
export class DesignationDao {

    constructor() {
    }

    list() : Promise<Common.Designation[]> {
        return new Promise((resolve, reject) => {
           
        });
    }
}