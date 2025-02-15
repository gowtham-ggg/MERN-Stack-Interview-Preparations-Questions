import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const AppContext = createContext();


// Create Provider Component
export const AppProvider = ({ children }) => {
  const url = "http://localhost:4000/user";


  const [userData, setUserData] = useState([])

  const add = async (name, mobile) => {
    try {
      const { data } = await axios.post(url, { name, mobile});

      if (!data) {
        console.log("Error:", data.message);
      } else {
        console.log("Added successfully:", data);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const updateData = async (id, name, mobile) => {
    try {
      const { data } = await axios.put(`${url}/${id}`, { name, mobile });
  
      if (!data) {
        console.log("Failed to update");
        return;
      }
  
      console.log("Updated successfully");
      getData(); // Refresh the data after updating
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

useEffect(()=>{
  getData()
},[add])

  return (
    <AppContext.Provider value={{ add, userData,getData,updateData }}>
      {children} {/* Fixed "Children" prop */}
    </AppContext.Provider>
  );
};

// Custom Hook for Using Context
export const useAppContext = () => useContext(AppContext);
