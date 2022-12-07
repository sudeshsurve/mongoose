const userdb = require("../model/user_model")

const get_data = async(req , res) =>{
  try {
    const result = await userdb.find()
    res.status(200).json(result)
  } catch (error) {
    
  }``
}
const post_user = async(req , res)=>{
    try {
        await userdb.create(req.body)
        res.status(201).json("success")
    } catch (error) {
        console.log("error");
    }

}

module.exports = {get_data , post_user}