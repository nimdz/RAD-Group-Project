const mongoose =require("mongoose");

const bookingSchema=new mongoose.Schema({

  place: {type:String, required:true},
  checkIn: {type:Date, required:true},
  checkOut: {type:Date, required:true},
  noofPeople: {type:Number, required:true},
  phoneNo: {type:String, required:true}
});

const Booking=mongoose.model("Booking",bookingSchema);

module.exports=Booking;