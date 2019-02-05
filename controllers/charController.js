import mongoose from 'mongoose';
//import models
import charSchema from '../models/charSchema';

// getCharacters
export const getCharacters = (req,res) => {
  charSchema.find().exec((err,characters) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Characters fetched successfully',characters});
  });
}

//addCharacter
export const addCharacter = (req,res) => {
  const newCharacter = new charSchema(req.body);
  newCharacter.save((err,character) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Character added successfully',character});
  })
}

//updateCharacter
export const updateCharacter = (req,res) => {
  charSchema.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,character) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(character);
    return res.json({'success':true,'message':'Updated successfully',character});
  })
}

//getCharacter
export const getCharacter = (req,res) => {
  charSchema.find({_id:req.params.id}).exec((err,character) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(character.length){
      return res.json({'success':true,'message':'Character fetched by id successfully',character});
    }
    else{
      return res.json({'success':false,'message':'Character with the given id not found'});
    }
  })
}

//deleteCharacter
export const deleteCharacter = (req,res) => {
  charSchema.findByIdAndRemove(req.params.id, (err,character) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':character.characterText+' deleted successfully'});
  })
}