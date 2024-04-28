
const mongoose = require('mongoose');

const profile = new  mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    passward : {
        type : String,
        required : true
    },
    instituteName : {
        type : String,
        // required : true
    },
    specification : {
        type : String,
        // required : true
    },
    yoj : {
        type : String,
        // required : true
    },
    yoe : {
        type : String,
        // required : true
    },
    grade : {
        type : String,
        // required : true
    },
    activity : {
        type : String,
        // required : true
    },
    about : {
        type : String,
        // required : true
    },
    password : {
        type : String,
        // required : true
    },
    district : {
        type : String,
        // required : true
    },
    state : {
        type : String,
        // required : true
    },
    language : {
        type : String,
        // required : true
    },
    skills : {
        type: String,
        // required: true
    }
})

const Profile = mongoose.model('profile' , profile) ;
module.exports = Profile