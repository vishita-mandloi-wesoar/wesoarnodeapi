export {};
const ContactModel = require('./ContractData.model');
const SubscriptionModel = require('./Subscription.model');
const TechDataModel = require('./TechData.model');

const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const OrganizationModule = new Schema({
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'module'},
    enabled: {
        type: Boolean, 
        default:false          
    }})
   
const OrganizationSchema = new Schema({
  
    name: {
        type: String,
        required: 'name required',
        trim: true
    },
    keyName: {
        type: String,
        required: 'keyName required',
        trim: true
    },
    organizationGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'organizationGroup'},
    modulesId: {
        type: [OrganizationModule],
              
    }, fieldMap: {
        type: Array,          
    },
    size: {
        type: Number,
        required: 'employeeno required',
        trim: true           
    },profileUrl: {
        type: String,
       
        default:null          
    },industry: {
        type: String,
        required: 'industry required',
        trim: true         
    },type: {
        type: String,
        required: 'type required',
        trim: true           
    },country: {
        type: String,
        required: 'country required',
        trim: true            
    },totalRevenue: {
        type: Number,
        required: 'totalRevenue required',
        trim: true          
    },
    YOE: {
        type: Date,
        default:null          
    },objectives: {
        type: String,
       // required: 'objectives required',
        trim: true            
    },contacts: {
        type: [ContactModel]         
    },status: {
        type: String,  
        enum : ['ACTIVE','INACTIVE'], 
        default: 'INACTIVE'         
    },activationLink: {
        type: String,
       // required: 'activationLink required',
        trim: true         
    },
    contractDataList: {
        type: [ContactModel]          
    },
    subscriptions: {
        type: [SubscriptionModel]          
    },
    domain: {
        type: String,
       // required: 'domain required',
        trim: true           
    },techData: {
        type: TechDataModel              
    },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // },
    // updated_at: {
    //     type: Date,
    //     default: Date.now
    // }
});
module.exports = mongoose.model('organization', OrganizationSchema);