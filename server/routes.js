import Express from "express";
const router = Express.Router();
import Student from "./db/models/Student.js";


router.get("/chara", async (req, res) => {
  res.json(await Student.find({}).sort({ school: 1, name: 1 }));
});

router.get("/chara/:charaName", async (req, res) => {
  const charaName = req.params.charaName;
  res.json(await Student.find({charaName}).sort({ school: 1, name: 1 }));
});


router.get("/schools", async (req, res) => {
  res.json(await Student.find({}).distinct("school"));
});

router.get("/schools/:schoolName", async (req, res) => {
  const school = req.params.schoolName;
  res.json(
    await Student.find({ school }).sort({ school: 1, name: 1 })
  );
});

//SEARCH BY CATEGORIES

//NAME
router.get("/category/name/:name", async (req, res) => {
  const name = req.params.name
  res.json(await Student.find({name}).sort({ school: 1, name: 1 }));
});

//AGE
router.get("/category/age/:age", async (req, res) => {
  const age = req.params.age
  res.json(await Student.find({age}).sort({ school: 1, name: 1 }));
});


//DESIGNER
router.get("/category/designer/:designer", async (req, res) => {
  const designer = req.params.designer
  res.json(await Student.find({designer}).sort({ school: 1, name: 1 }));
});

//ILLUSTRATOR
router.get("/category/illustrator/:illustrator", async (req, res) => {
  const illustrator = req.params.illustrator
  res.json(await Student.find({illustrator}).sort({ school: 1, name: 1 }));
});

//VOICE
router.get("/category/voice/:voice", async (req, res) => {
  const voice = req.params.voice
  res.json(await Student.find({voice}).sort({ school: 1, name: 1 }));
});

//ROLE
router.get("/category/role/:role", async (req, res) => {
  const role = req.params.role
  res.json(await Student.find({role}).sort({ school: 1, name: 1 }));
});


//COMBAT CLASS
router.get("/category/combatClass/:combatClass", async (req, res) => {
  const combatClass = req.params.combatClass
  res.json(await Student.find({combatClass}).sort({ school: 1, name: 1 }));
});


//WEAPON TYPE
router.get("/category/weaponType/:weaponType", async (req, res) => {
  const weaponType = req.params.weaponType
  res.json(await Student.find({weaponType}).sort({ school: 1, name: 1 }));
});

export default router;