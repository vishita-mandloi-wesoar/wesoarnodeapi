
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

export const PlanData = new Schema({
    objective: {
        type: String,
        trim:true,
    },
    dueBy: {
        type: Date,
        default:null 
    },    
    target: {
        type: String,
        trim: true
    }, 
    comment: {
        type: String,
        trim: true
    },
  
  
   
});

export const ImprovementPlanData = new Schema({
    supportText: {
        type: String,
        trim:true,
    },
    planType: {
        type: String,
        enum : ['FORMAL','IMFORMAL'], 
        default: 'FORMAL' 
    },    
    plans: {
        type: [PlanData],
        default:null 
    },    
    sendPlanDate: {
        type: Date,
        default:null 
    },    
    userAcceptanceDate: {
        type: Date,
        default:null 
    },
    isUserAccepted: {
        type: Boolean,
        default: false
    },
    isManagerAccepted: {
        type: Boolean,
        default: false
    }, 
     improvedDetailText: {
        type: String,
    
        trim: true
    }, 
     submitDate: {
        type: Date,
        default:null 
    },
    managerAcceptanceDate: {
        type: Date,
        default:null 
    },
  
   
});
