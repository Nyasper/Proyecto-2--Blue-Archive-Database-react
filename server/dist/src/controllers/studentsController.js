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
exports.getAllSchoolsNames = exports.categoryController = exports.getCharaByCharaName = exports.getAllCharas = void 0;
const mongo_1 = require("../db/mongo");
const studentModel_1 = __importDefault(require("../db/studentModel"));
const categories_1 = require("./categories");
(0, mongo_1.connectMongoDB)();
function getAllCharas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let charas = [];
            if (req.query.limit && req.query.limit > 0) {
                charas = yield studentModel_1.default.find({})
                    .limit(req.query.limit)
                    .sort({ school: 1, name: 1 });
            }
            else {
                charas = yield studentModel_1.default.find({}).sort({ school: 1, name: 1 });
            }
            if (!charas) {
                throw new Error('Error trying getting all charas');
            }
            return res.status(200).send(charas);
        }
        catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
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
