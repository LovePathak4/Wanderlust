const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const bookingSchema=new Schema({

 listing:{
   type:Schema.Types.ObjectId,
   ref:"Listing"
 },

 guest:{
   type:Schema.Types.ObjectId,
   ref:"User"
 },

 checkIn:Date,

 checkOut:Date,

 guests:Number,

 totalPrice:Number,

 status:{
   type:String,
   default:"Confirmed"
 }

});

module.exports=mongoose.model("Booking",bookingSchema);