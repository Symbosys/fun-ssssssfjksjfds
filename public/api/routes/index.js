"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelRoute = exports.modelRouter = exports.adminRouter = void 0;
const admin_routes_1 = __importDefault(require("./admin.routes"));
exports.adminRouter = admin_routes_1.default;
const model_routes_1 = __importDefault(require("./model.routes"));
exports.modelRouter = model_routes_1.default;
const hotel_routes_1 = __importDefault(require("./hotel.routes"));
exports.hotelRoute = hotel_routes_1.default;
