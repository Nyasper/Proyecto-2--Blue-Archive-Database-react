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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudents = void 0;
const mongo_1 = require("../db/mongo");
const studentModel_1 = __importDefault(require("../../Models/studentModel"));
(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, mongo_1.connectMongoDB)(); }))();
function getAllStudents(limit = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (limit > 0)
                return yield studentModel_1.default.find({}).sort({ school: 1, name: 1 });
            return yield studentModel_1.default.find({}).limit(limit).sort({ school: 1, name: 1 });
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
exports.getAllStudents = getAllStudents;
