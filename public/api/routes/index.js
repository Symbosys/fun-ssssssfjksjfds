"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingRoute = exports.BookingRoute = exports.applicationRoutes = exports.modelRouter = exports.adminRouter = void 0;
const admin_routes_1 = __importDefault(require("./admin.routes"));
exports.adminRouter = admin_routes_1.default;
const model_routes_1 = __importDefault(require("./model.routes"));
exports.modelRouter = model_routes_1.default;
const application_routes_1 = __importDefault(require("./application.routes"));
exports.applicationRoutes = application_routes_1.default;
const booking_routes_1 = __importDefault(require("./booking.routes"));
exports.BookingRoute = booking_routes_1.default;
const setting_routes_1 = __importDefault(require("./setting.routes"));
exports.SettingRoute = setting_routes_1.default;
