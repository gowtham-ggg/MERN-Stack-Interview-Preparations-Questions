import express from "express";
import userData from "../model/userModel.js";

const userRoute = express.Router();

userRoute.post("/", async (req, res) => {
  try {
    const { name, mobile } = req.body;

    // ✅ Corrected Validation Condition
    if (!name || !mobile) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // ✅ Corrected Field Name (`mobile` instead of `phone`)
    const newUserData = new userData({ name, mobile });
    await newUserData.save();

    res.status(201).json({ success: true, message: "Added successfully", data: newUserData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
});



userRoute.get("/", async (req, res) => {
  try {
    const users = await userData.find(); // ✅ Use `await` to fetch users

    if (users.length === 0) {  // ✅ Correct check for empty array
      return res.status(404).json({ success: false, message: "No users found" });
    }

    res.status(200).json({ success: true, message: "Fetched successfully", data: users }); // ✅ Correct JSON response
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
});

userRoute.put("/:id", async(req, res)=>{
  try {
    const {id} = req.params
    const {name, mobile} = req.body
    if (!name || !mobile) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const updatedUser = await userData.findByIdAndUpdate(
      id, {name, mobile},{new : true, runValidators : true } 
    )
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({success : true, message : "updated succesfully", updatedUser})

  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
})


userRoute.delete("/:id", async(req, res)=>{
  const {id} = req.params
const deleteUser = await userData.findByIdAndDelete(id)
  if(!deleteUser){
    return res.status(404).json({success : false, message : "Data not found"})
  }

  
  res.json({success : true, message : "Deleted succesfully"})
})

export default userRoute;
