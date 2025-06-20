import { Router } from "express";
import { BookingController } from "../controllers";

const booking = Router();

booking.post("/create", BookingController.createBooking)
booking.get("/all", BookingController.getALlBookings);
booking.get("/:bookingId", BookingController.getBookingById);
booking.delete("/:bookingId", BookingController.deleteBooking);

export default booking;