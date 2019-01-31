const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    race: {
        type: String, required: true,
        subrace: { type: String, required: true }
    },
    gender: { type: String },
    alignment: { type: String },
    class: {
        type: String, required: true,
        subclass: String,
        isSpellcaster: Boolean,
    },
    classFeatures: [
        { featureName: String, featureUrl: String }
    ],
    vitals: {
        armorClass: { type: Number, required: true },
        health: { type: Number, required: true },
        hitDice: { type: String, required: true },
        speed: { type: Number, required: true },
        initiative: { type: Number, required: true },
        passivePerception: { type: Number, required: true }
    },
    attributes: [

        {
            attr: { type: String, default: "Str", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        },
        {
            attr: { type: String, default: "Dex", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        },
        {
            attr: { type: String, default: "Con", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        },
        {
            attr: { type: String, default: "Int", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        },
        {
            attr: { type: String, default: "Wis", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        },
        {
            attr: { type: String, default: "Cha", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },
            saveThrow: { type: Number, default: 0, isProficient: Boolean },
        }
    ],
    skills: [
        {
            skillName: { type: String, default: "Acrobatics", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Animal Handling", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Arcana", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Athletics", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Str", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Deception", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "History", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Insight", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Intimidation", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Investigation", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Medicine", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Nature", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Perception", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Performance", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Persuasion", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Religion", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Sleight of Hand", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Stealth", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Survival", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true, mod: { type: Number, default: 0 } },
            isProficient: { type: Boolean, required: true, default: false }
        },

    ],
    proficiencies: {
        modifier: { type: Number, required: true, default: 2 },
        languages: [{ type: String, required: true, default:["common"]}],
        armor: [{ type: String }],
        weapons: [{ type: String}],
        tools: [{ type: String }],
    },
    equipment: {
        mundane: [{ itemName: String }],
        magical: [{ itemName: String }],
        weapons: [
            { weaponName: String, damage: String, damageType: String, isProficient: Boolean, IsRanged: Boolean, isFinesse: Boolean, isVersatile: Boolean }
        ]
    },
    money: [
        { currency: { type: String, default: "cp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "sp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "ep" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "gp" }, ammount: { type: Number, default: 0 } },
        { currency: { type: String, default: "gems" }, ammount: { type: Number, default: 0 } },
    ]


});

const fakedata = require("../fakeSheet.json")
mongoose.model("charSchema", charSchema).insertMany(fakedata, function(err){
  console.log(err)
})

module.exports = mongoose.model("charSchema", charSchema);