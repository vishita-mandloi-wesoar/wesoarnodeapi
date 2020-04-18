
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const UserFrequencySettingData = new Schema({
    frequencyType: {
        type: String,
        enum : ['DAILY','WEEKLY','FORTNIGHTLY','MONTHLY','QUARTERLY','HALF_YEARLY','ANNUAL'], 
        default: 'DAILY'  
    },
    startDate: {
        type: Date,
        default:null 
    },     
});
export const UserSettingData = new Schema({
    checkInFrequencySetting: {
        type: UserFrequencySettingData,
    },
    conversationFrequencySetting: {
        type: UserFrequencySettingData,
        
    },     
});