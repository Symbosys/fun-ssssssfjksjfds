import { Router } from "express";
import { HotelController } from "../controllers";

const hotelRoute = Router();

hotelRoute.post("/create", HotelController.createHotel);
hotelRoute.get("/all", HotelController.getAllHotels);

hotelRoute.get("/:id", HotelController.getHotelById);
hotelRoute.delete("/:id", HotelController.deleteHotelById);

export default hotelRoute;