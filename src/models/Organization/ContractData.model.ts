

const mongoose =require('mongoose');
const Schema = mongoose.Schema;

export const ContractData = new Schema({
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'module'},
    startDate: {
        type: Date,
        default:null 
    },
    endDate: {
        type: Date,
        default:null 
    },    
    commissionDate: {
        type: Date,
        default:null 
    },    
    billingFrequency: {
        type: Number,
       // required: 'required billingFrequency',
        trim: true
    },    
    commissionPercentage: {
        type: Number,
      //  required: 'required commissionPercentage',
        trim: true
    },
    plan: {
        type: String,
       // required: 'plan required',
        trim: true
    }, 
});
