export {};
const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const UserSetting = require('./UserSetting');
const UserImprovementPlan = require('./ImprovementPlan');


export const UserSchema = new Schema({

   firstName: {
        type: String,
        //required: 'Enter the firstName',
        trim: true
    },
    lastName: {
        type: String,
        //required: 'Enter a lastName',
        trim: true
    },
    email: {
        type: String,
        //required: 'Enter a email',
        trim: true           
    },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role'}],
    profileImageUrl: {
        type: String,
        default:null               
    }, mobileNumber: {
        type: String,
       // required: 'Enter a mobileNumber',
        trim: true           
    },
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'organization',
    default: null },
    orgUnitId: { type: mongoose.Schema.Types.ObjectId, ref: 'orgUnit',
    default: null },
    managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'manager',
    default: null },
    gradeId: { type: mongoose.Schema.Types.ObjectId, ref: 'grade',
    default: null },
    secondaryGradeId: { type: mongoose.Schema.Types.ObjectId, ref: 'secondaryGrade',
    default: null },
    designationId: { type: mongoose.Schema.Types.ObjectId, ref: 'designation',
    default: null },
    locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'location',
    default: null },
  
    employeeNo: {
        type: String,
       // required: 'employeeno required',
        trim: true           
    },DOB: {
        type: Date,
        default:null          
    },joiningDate: {
        type: Date,
        default:null          
    },terminationDate: {
        type: Date,
        default:null         
    },status: {
        type: String,
        //required: 'status required',
        trim: true           
    },isVoluntary: {
        type: Boolean,
        default: false,          
    },
    isRegrettable: {
        type: Boolean,
        default: false,          
    },attributes: {
        type: Array             
    },setting: {
        type: UserSetting         
    },improvementPlan: {
        type: UserImprovementPlan,            
    },recognition: {
        type: Array          
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
//module.exports = mongoose.model('user', UserSchema);