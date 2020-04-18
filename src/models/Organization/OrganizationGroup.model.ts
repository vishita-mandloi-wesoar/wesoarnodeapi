
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

export const OrganizationGroupData = new Schema({
    name: {
        type: String,
        require:'name required'
    },
    keyName: {
        type: String,
        require:'keyName required'
    },   
  
  
   
});
