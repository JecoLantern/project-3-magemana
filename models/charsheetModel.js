const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charsheetSchema = new Schema({
  characterBuild: {
    name: { type: String, required: true },
    level: { type: Number, default: 1 },
    race: { type: String, required: true },
    subrace: { type: String, required: true },
    class: { type: String, required: true },
    subclass: { type: String, required: true },
    attributes: [
        {attr: { type: String, default: "str" }, val: { type: Number, default: 10 }},
        {attr: { type: String, default: "dex" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "con" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "int" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "wis" }, val: { type: Number, default: 10 }}, 
        {attr: { type: String, default: "cha" }, val: { type: Number, default: 10 }}
    ],
    proficencies: [{ type: String }],
    startingEquipment: [{ type: String }],
  }
});

const CharacterBuild = mongoose.model("charsheet", charsheetSchema);

module.exports = CharacterBuild;