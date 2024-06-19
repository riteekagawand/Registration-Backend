const User = require ("../Models/Users")

const user = async (req,res) => {
    const user = await User.findOne()
    
    if (!user) {
        res.send("User not found")
    }
    res.send(user)
    
 }
 
 const createUser = async(req,res) => {
     const user = new User(req.body)
     await user.save()
     res.send(user)
 }

 const updateUser = async(req,res) => {

    const params = req.params.id;
    const user = await User.findByIdAndUpdate(3, req.body)

    if (!user) {
        res.send("User not found, Cannot update")
    }
    res.send(user)
 }

 const deleteUser = async(req,res) => {
    const params = req.params.id;
    const user = await User.findByIdAndDelete(3, req.body)
    if(!user) {
        res.send("User not found, Cannot delete")
    }
    res.send(user)
 }
 
 module.exports = {user,createUser,updateUser,deleteUser}