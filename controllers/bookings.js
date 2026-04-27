const Booking = require("../models/booking");
const Listing = require("../models/listing");


module.exports.createBooking = async (req, res) => {

    let listing = await Listing.findById(req.params.id);

    let days =
        (new Date(req.body.checkOut) - new Date(req.body.checkIn))
        / (1000 * 60 * 60 * 24);

    let total = days * listing.price;


    let booking = new Booking({

        listing: listing._id,
        guest: req.user._id,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        guests: req.body.guests,
        totalPrice: total

    });

    await booking.save();

    listing.bookings.push(booking._id);
    await listing.save();

    req.flash("success", "Booking Confirmed!");

    res.redirect(`/listings/${listing._id}`);
};



module.exports.myBookings = async (req, res) => {

    let bookings = await Booking.find({
        guest: req.user._id
    }).populate("listing");

    res.render("bookings/index", { bookings });
};