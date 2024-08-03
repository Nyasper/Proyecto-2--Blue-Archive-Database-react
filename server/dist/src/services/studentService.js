"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getAllSchoolsNames = exports.categoryController = exports.getCharaByCharaName = exports.getAllCharas = void 0;
const studentModel_1 = __importDefault(require("../../Models/studentModel"));
const categories_1 = require("./categories");
const studentRepository = __importStar(require("../repository/studentRepository"));
const getAllCharas = () => __awaiter(void 0, void 0, void 0, function* () { return yield studentRepository.getAllStudents(); });
exports.getAllCharas = getAllCharas;
function getCharaByCharaName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { charaName } = req.params;
            const chara = yield studentModel_1.default.findOne({ charaName });
            if (!chara) {
                return res.status(404).send({ message: 'character not found' });
            }
            return res.send(chara);
        }
        catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.getCharaByCharaName = getCharaByCharaName;
function categoryController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const existParams = Object.keys(req.query).length > 0;
        if (existParams) {
            return yield (0, categories_1.manageParamQuery)(req, res, studentModel_1.default);
        }
        if (req.params.categoryName) {
            return yield (0, categories_1.manageParamUrl)(req, res, studentModel_1.default);
        }
        return res.status(400).send({ message: 'Bad Request' });
    });
}
exports.categoryController = categoryController;
function getAllSchoolsNames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schools = yield studentModel_1.default.find({}).sort({ name: 1 }).distinct('school');
            if (!schools) {
                throw new Error('Error trying getting all schools');
            }
            return res.status(200).send(schools);
        }
        catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.getAllSchoolsNames = getAllSchoolsNames;
