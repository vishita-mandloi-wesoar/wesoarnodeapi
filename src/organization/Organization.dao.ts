const OrganizationModel = require('../models/Organization/Organization.model');

export class OrganizationDao {

    constructor() {
    }
    organization(args:any) {
        return new Promise((resolve, reject) => {
            console.log(args.domain)
            OrganizationModel.findOne({'domain':args.domain},function(err:any, item:any) {
                if(err) {
                        console.log(err);
                        throw err;
                }
                resolve(item)
            });
        });
    }
   
 

}