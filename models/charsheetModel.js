const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charsheetSchema = new Schema({
  characterBuild: {
    name: { type: String, required: false },
    level: { type: Number, default: 1 },
    race: { type: String, required: false },
    //gender
    //alginment
    subrace: { type: String, required: false },
    class: { type: String, required: false },
    subclass: { type: String, required: false },
    //classfeatures
    //vitals
    attributes: [
        {attr: { type: String, default: "str" }, val: { type: Number, default: 10 }},
        {attr: { type: String, default: "dex" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "con" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "int" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "wis" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "cha" }, val: { type: Number, default: 10 }}
    ],
    //skills

    proficencies: [{ type: String }],
    //equipemts
    //money
    startingEquipment: [{ type: String }],
  }
});

const CharacterBuild = mongoose.model("charsheet", charsheetSchema);

const fakedata = require("../fakeSheet.json")
CharacterBuild.insertMany(fakedata, function(err){
  console.log(err)
})

module.exports = CharacterBuild;