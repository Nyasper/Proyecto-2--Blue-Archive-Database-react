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
exports.manageParamQuery = exports.manageParamUrl = exports.getAllCategoryes = void 0;
const filtredCategories = [
    'name',
    'age',
    'school',
    'designer',
    'illustrator',
    'voice',
    'role',
    'combatClass',
    'weaponType',
    'skinSet',
];
function getAllCategoryes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.send(filtredCategories);
        }
        catch (error) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.getAllCategoryes = getAllCategoryes;
function manageParamUrl(req, res, Student) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoryName = req.params.categoryName.toLowerCase();
            const validCategory = filtredCategories.find((category) => category.toLowerCase().includes(categoryName));
            if (validCategory) {
                const categories = yield Student.find({ [validCategory]: { $ne: null } })
                    .sort({ school: 1, name: 1 })
                    .distinct(validCategory);
                return res.status(200).send(categories);
            }
            return res.status(400).send({ error: 'categoryName not valid.' });
        }
        catch (error) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.manageParamUrl = manageParamUrl;
function manageParamQuery(req, res, Student) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { value } = req.query;
            const { categoryName } = req.params;
            if (!categoryName || !value) {
                return res.status(400).send({ error: 'category or value not provided' });
            }
            const charas = yield Student.find({ [categoryName]: value }).sort({
                school: 1,
                name: 1,
            });
            return res.status(200).send(charas);
        }
        catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.manageParamQuery = manageParamQuery;
