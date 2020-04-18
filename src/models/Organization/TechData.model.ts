
const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const DBConfiguration = new Schema({
   
    userName: {
        type: String,required: 'userName required',trim: true
    },    
    password: {
        type: String,required: 'password required',trim: true
    },    
    dbName: {
        type: String,required: 'dbName required',trim: true
    },    
    url: {
        type: String,required: 'url required',trim: true
    }, 
    replicas: {
        type: String,required: 'replicas required',trim: true
    },   
});
const SendGridConfiguration = new Schema({
   
    userName: {
        type: String,required: 'userName required',trim: true
    },    
    password: {
        type: String,required: 'password required',trim: true
    },    
    from: {
        type: String,required: 'dbName required',trim: true
    },    
    
});
const AWSConfiguration = new Schema({
   
    accessKey: {
        type: String,required: 'accessKey required',trim: true
    },    
    secretKey: {
        type: String,required: 'secretKey required',trim: true
    },    
    s3BuckName: {
        type: String,required: 's3BuckName required',trim: true
    }, 
    cognitoId: {
        type: String,required: 'cognitoId required',trim: true
    },   
    region: {
        type: String,required: 'region required',trim: true
    },      
    
});
export const TechData = new Schema({
    dbConfiguration: {
        type: DBConfiguration,
       
    },  
     sendGridConfiguration: {
        type: SendGridConfiguration,
       
    },
     AWSConfiguration: {
        type: AWSConfiguration,
        
    },  
});




 

  
 
  
  
  