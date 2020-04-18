
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

export const SubscriptionData = new Schema({
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'module'},
    noOfSubscribers: {
        type: Number,
        default:null 
    },
    fee: {
        type: Number,
        default:null 
    },    
    startDate: {
        type: Date,
        default:null 
    },    
    endDate: {
        type: Date,
        default:null 
    },    
    isPaid: {
        type: Boolean,
       default:false
    },
    isCommissionPaid: {
       type: Boolean,
       default:false
    },
   
  
   
});
