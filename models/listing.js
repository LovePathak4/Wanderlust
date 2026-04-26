const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const Review=require("./review.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    } ,

    description: String,

    // image:{
    //     filename:String,
    //     url:{
    //         // type: String,
    //     default: "https://pixabay.com/photos/woman-beauty-portrait-fashion-9354692/",
    //     type: String,
    //     }
    //     // set: (v) => {            if (v === "") {
    //     //         return "https://pixabay.com/photos/woman-beauty-portrait-fashion-9354692/";
    //     //     }
    //     // }
    //  },


    //   image: {
    //     filename: String,
    //     url: {
    //         type: String,
    //         default: "https://wallpaperaccess.com/full/112722.jpg",
    //         set: (v) => {
    //             if (!v || v.trim() === " ") {
    //                 return "https://wallpaperaccess.com/full/112722.jpg";
    //             }
    //             return v;
    //         }
    //     }
    // },



    image: {
        url:String,
        filename:String,
    },



    price: Number,
    location: String,
    country: String,

    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],

    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },

    category:{
    type:String,
    enum:[
        "Rooms",
        "Trending",
        "Beach",
        "Mountain",
        "Iconic-City",
        "Castles",
        "Amazing-Pools",
        "Camping",
        "Farms",
        "Arctic"
    ],
    default:"Rooms"
},

  
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
});

const Listing= mongoose.model('Listing', listingSchema);
module.exports=Listing;