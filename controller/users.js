const userdb = require("../model/user_model")

const get_data = async(req , res) =>{
  try {
    const result = await userdb.find()
    res.status(200).json(result)
  } catch (error) {
    res.json(error)
  }
}
const post_user = async(req , res)=>{
    try {
      const { firstname,  lastname , State ,password,  City ,Zip } = req.body
      console.log(req.body);
      let data = new userdb({ firstname :firstname,  lastname:lastname , State:State ,password:password,  City:City ,Zip:Zip })
      await data.save()
      res.status(201).json({message :"success"})
    } catch (error) { 
        console.log("error");
        res.json({msg:"error"})
    }
}

const delete_user = async(req , res) =>{
try {
  const id = req.params.id
  const result  = await userdb.deleteOne({_id: id})
  console.log(result);
  res.json({message:"success"})
} catch (error) {
   res.json(error)
}
}

const update_user = async(req , res) =>{
try {
   const id = req.params.id
   const result = await userdb.findByIdAndUpdate({_id : id} , req.body)
   console.log(result);
   res.json({message :"success"})
} catch (error) {
  res.json(error)
}
}

const get_single_user = async(req , res) =>{
  try {
    let id = req.params.id 
    const user= await userdb.findById({_id : id})
    res.json(user)
  } catch (error) {
          res.json(error)
  } 
}

module.exports = {get_data , post_user , delete_user , update_user , get_single_user}
