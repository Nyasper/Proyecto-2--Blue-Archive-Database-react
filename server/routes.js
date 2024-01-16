import Express from "express";
const router = Express.Router();
import Student from "./db/models/Student.js";


router.get("/chara", async (req, res) => {
  return res.json(await Student.find({}).sort({ school: 1, name: 1 }));
});

router.get("/chara/:charaName", async (req, res) => {
  const charaName = req.params.charaName;
  return res.json(await Student.find({ charaName }).sort({ school: 1, name: 1 }));
});


router.get("/schools", async (req, res) => {
  return res.json(await Student.find({}).sort({ school: 1, name: 1 }).distinct("school"));
});

router.get("/schools/:schoolName", async (req, res) => {
  const school = req.params.schoolName;
  return res.json(
    await Student.find({ school }).sort({ school: 1, name: 1 })
  );
});

//SEARCH BY CATEGORIES

//NAME
router.get("/category/name/:name", async (req, res) => {
  const { name } = req.params
  return res.json(await Student.find({ name }).sort({ school: 1, name: 1 }));
});

//AGE
router.get("/category/age/:age", async (req, res) => {
  const { age } = req.params
  return res.json(await Student.find({ age }).sort({ school: 1, name: 1 }));
});


//DESIGNER
router.get("/category/designer/:designer", async (req, res) => {
  const { designer } = req.params
  return res.json(await Student.find({ designer }).sort({ school: 1, name: 1 }));
});

//ILLUSTRATOR
router.get("/category/illustrator/:illustrator", async (req, res) => {
  const { illustrator } = req.params
  return res.json(await Student.find({ illustrator }).sort({ school: 1, name: 1 }));
});

//VOICE
router.get("/category/voice/:voice", async (req, res) => {
  const { voice } = req.params
  return res.json(await Student.find({ voice }).sort({ school: 1, name: 1 }));
});

//ROLE
router.get("/category/role/:role", async (req, res) => {
  const { role } = req.params
  return res.json(await Student.find({ role }).sort({ school: 1, name: 1 }));
});


//COMBAT CLASS
router.get("/category/combatClass/:combatClass", async (req, res) => {
  const { combatClass } = req.params
  return res.json(await Student.find({ combatClass }).sort({ school: 1, name: 1 }));
});

router.get("/category/skinSet/:skinSet", async (req, res) => {
  const { skinSet } = req.params

  return res.json(await Student.find({ skinSet }).sort({ school: 1, name: 1 }));
});


//WEAPON TYPE
router.get("/category/weaponType/:weaponType", async (req, res) => {
  const { weaponType } = req.params

  return res.json(await Student.find({ weaponType }).sort({ school: 1, name: 1 }));
});

export default router;