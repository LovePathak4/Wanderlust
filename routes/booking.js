const express = require("express");
const router = express.Router();

const bookingController =
    require("../controllers/bookings");

const { isLoggedIn } =
    require("../middleware");


router.post(
    "/listings/:id/book",
    isLoggedIn,
    bookingController.createBooking
);

router.get(
    "/mybookings",
    isLoggedIn,
    bookingController.myBookings
);


router.delete(
    "/bookings/:bookingId",
    isLoggedIn,
    bookingController.cancelBooking
);

module.exports = router;