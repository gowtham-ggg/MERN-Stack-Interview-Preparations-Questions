import React, { useState } from "react";
import { useAppContext } from "../contextApi/AppContext";
import Card from "./Card";

const Test = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const { add,updateData } = useAppContext(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    add(name, mobile); 
    setName(""); 
    setMobile("");
  };

  return (
    <div>
      <h1>CRUD Operations</h1>

     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel" 
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <button  type="submit">Add</button> 
      </form>
      <div>
        <Card  />
      </div>
    </div>
  );
};

export default Test;
