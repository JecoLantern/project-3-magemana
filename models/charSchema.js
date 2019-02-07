const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charSchema = new Schema({
    //charstuff
    user_id: { type:String, required: true},
    name: { type: String, required: true },
    level: { type: Number, required: true },
    race: { type: String, required: true },
    subrace: { type: String, required: true },
    gender: String,
    alignment: String,
    class: {
        type: String, required: true,
    },
    subclass: String,
    isSpellcaster: Boolean,
    classFeatures: [
        { featureName: String, fUrl: String }
    ],
    //vitals
    armorClass: { type: Number, required: true },
    health: { type: Number, required: true },
    hitDice: { type: String, required: true },
    speed: { type: Number, required: true },
    initiative: { type: Number, required: true },
    passivePerception: { type: Number, required: true },
    //skills and atts
    attributes: [

        {
            attr: { type: String, default: "STR", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

        },
        {
            attr: { type: String, default: "DEX", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

        },
        {
            attr: { type: String, default: "CON", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

        },
        {
            attr: { type: String, default: "INT", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

        },
        {
            attr: { type: String, default: "WIS", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

        },
        {
            attr: { type: String, default: "CHA", required: true },
            val: { type: Number, default: 10, required: true },
            mod: { type: Number, default: 0, required: true },

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
    skills: [
        {
            skillName: { type: String, default: "Acrobatics", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Animal Handling", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Arcana", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Athletics", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Str", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Deception", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "History", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Insight", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Intimidation", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Investigation", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Medicine", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Nature", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Perception", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Performance", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Persuasion", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Cha", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Religion", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Int", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Sleight of Hand", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Stealth", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Dex", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },
        {
            skillName: { type: String, default: "Survival", required: true },
            val: { type: Number, default: 10, required: true },
            parentAttr: { type: String, default: "Wis", required: true },
            isProficient: { type: Boolean, required: true, default: false }
        },

    ],
    //the rest
    proficiencies: {
        modifier: { type: Number, required: true, default: 2 },
        languages: [{ type: String, required: true, default: ["common"] }],
        armor: [{ type: String }],
        weapons: [{ type: String }],
        tools: [{ type: String }],
    },
    equipment: {
        mundane: [{ itemName: String, quantity: Number }],
        magical: [{ itemName: String, quantity: Number }],
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

// Delete before deploy
const fakedata = require("../client/src/pages/Sheet/util/fakeSheet.json")
mongoose.model("charSchema", charSchema).deleteMany({}).then(() => {
    mongoose.model("charSchema", charSchema).insertMany(fakedata, function (err) { console.log(err + " errors. Data inserted!") })
})



module.exports = mongoose.model("charSchema", charSchema);
