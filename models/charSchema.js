const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new Schema({
    //charstuff
    isInitiatlized: { Type: Boolean, default: false },
    user_Id: String,
    name: { type: String, required: true },
    level: { type: Number, required: true },
    race: { type: String, required: true },
    subrace: String,
    gender: String,
    alignment: String,
    class: {
        type: String, required: true,
    },
    subclass: String,
    isSpellcaster: Boolean,
    traits: [
        { name: String, url: String }
    ],
    //vitals
    armorClass: { type: Number, required: true, default: 0 },
    health: { type: Number, required: true, default: 6 },
    hitDice: { type: Number, required: true, default: 6 },
    speed: { type: Number, required: true, default: 30 },
    initiative: { type: Number, required: true, default: 0 },
    passivePerception: { type: Number, required: true, default: 10 },
    //skills and atts
    attributes: [

        {
            attr: { type: String, default: "STR", required: true },
            val: { type: Number, default: 10, required: true },
        },
        {
            attr: { type: String, default: "DEX", required: true },
            val: { type: Number, default: 10, required: true },
        },
        {
            attr: { type: String, default: "CON", required: true },
            val: { type: Number, default: 10, required: true },
        },
        {
            attr: { type: String, default: "INT", required: true },
            val: { type: Number, default: 10, required: true },
        },
        {
            attr: { type: String, default: "WIS", required: true },
            val: { type: Number, default: 10, required: true },
        },
        {
            attr: { type: String, default: "CHA", required: true },
            val: { type: Number, default: 10, required: true },
        }
    ],
    savingThrows: [
        { name: { type: String, default: "STR" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
        { name: { type: String, default: "DEX" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
        { name: { type: String, default: "CON" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
        { name: { type: String, default: "INT" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
        { name: { type: String, default: "WIS" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
        { name: { type: String, default: "CHA" }, val: { type: Number, default: 0 }, isProficient: { type: Boolean, default: false } },
    ],
    skillList: Array,
    //the rest
    languages: [],
    proficiencies: {

    },

    weapons: [
        { weaponName: String, damage: String, damageType: String, isProficient: Boolean, IsRanged: Boolean, isFinesse: Boolean, isVersatile: Boolean }
    ],

    equipment: [],
    money: [
        { currency: { type: String, default: "cp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "sp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "ep" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "gp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "gems" }, ammount: { type: Number, default: 0 } },
    ]


});

// Delete before deploy
// const fakedata = require("../client/src/pages/Sheet/util/fakeSheet.json")
// mongoose.model("charSchema", charSchema).deleteMany({}).then(() => {
//     mongoose.model("charSchema", charSchema).insertMany(fakedata, function (err) { console.log(err + " errors. Data inserted!") })
// })



module.exports = mongoose.model("charSchema", charSchema);
