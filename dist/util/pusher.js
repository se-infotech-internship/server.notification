"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_config_1 = __importDefault(require("../config/firebase-config"));
const pusher = (registrationToken, message) => {
    const options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    };
    return firebase_config_1.default.messaging().sendToDevice(registrationToken, message, options)
        .then(() => {
        console.log("Notification sent successfully");
    })
        .catch(err => {
        console.log(err);
    });
};
exports.default = pusher;
