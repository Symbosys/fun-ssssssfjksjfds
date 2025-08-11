"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const config_1 = require("../config");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const models = yield config_1.prisma.model.findMany({
            select: { id: true, name: true },
            take: 18 // optional; remove this line if you want to update all
        });
        for (const model of models) {
            const capitalizedName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
            const personalizedDescription = `${capitalizedName} – The Magnetic Muse
Hi, I’m ${capitalizedName} — playful, thoughtful, and emotionally connected. I make you feel important, listened to, and fully in the moment.
With me, every interaction feels full of life and light. I offer you affection without condition, and attention without distraction.`;
            yield config_1.prisma.model.update({
                where: { id: model.id },
                data: {
                    description: personalizedDescription,
                },
            });
        }
        console.log('Descriptions updated for all models.');
    });
}
