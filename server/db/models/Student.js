import {Schema,model} from "mongoose";

const studentSchema = new Schema({
  charaName:String,
  name:String,
  lastName:String,
  school:String,
  role:String,
  combatClass:String,
  weaponType:String,
  age:Number,
  birthday:String,
  height:Number,
  hobbies:String,
  designer:String,
  illustrator:String,
  voice:String,
  releaseDate:String,
  url:String,
  files:Boolean
},{
  versionKey:false
})

export default model('Student' ,studentSchema)