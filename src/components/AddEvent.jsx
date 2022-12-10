import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Stylediv=styled.div`
font-family:   Arial, sans-serif;
 .title{
     margin: auto;
     width: 45%;
     font-size:1.2vw;
     color: red;
    //   border: 1px solid red; 
 }
  form{
      width: 45%;
      height: auto;
      /* border: 1px solid red; */
      margin: auto;
  } 
  input{
      width: 60%;
      height: 3.5vh;
      font-size:1vw;
  }
  p{
      font-size:1.2vw;
      line-height:.1vh;
  }

  .select{
    font-size:1.2vw;
  }
  .option{
      width: 45%;
      height: 4.3vh;
      font-size:1.2vw;
  }
  #btn{
      width: 30%;
      height: 4.5vh;
      font-weight: bold;
      font-size:1.2vw;
      background-color: green;
      color: white;
      border: 2px solid green;
      border-radius: 3px;
      margin-left: 14%;
  }
  #btn:hover{
      background-color: white;
      color: red;
  }
`;
export const AddEvent=()=>{
const [pdata, setData] =useState({})

const handleChange=(e)=>{
   let key=e.target.name;
       setData(
           {
               ...pdata,
               [key]: e.target.value,
           }
       )
}

   return (
      
           <Stylediv>
       <div className="title">
       <h1>Add the event</h1>
       </div>
       <form onSubmit={(e)=>{
          
           e.preventDefault();
           axios.post(`https://eventbackend.onrender.com/events`, pdata).then((res)=>{
              setData({
                event_name:"",
                event_address:"",
                  city:"",
                  state_name:"",
                  start_date:"",
                  end_date:"",
                  event_rating:"",
                  description:"",
              })
           })
       }}>
       <p>Event name</p>
       <input type="text" name="event_name" value={pdata.event_name} onChange={handleChange} placeholder="Event name" required />
       <p>Event address</p>
       <input type="text" name="event_address" value={pdata.event_address} onChange={handleChange} placeholder="Address" required />
        <p>Enter city</p>
       <input type="text" name="city" value={pdata.city} onChange={handleChange} placeholder="City" required />
       <p>Enter state</p>
       <input type="text" name="state_name" value={pdata.state_name} onChange={handleChange} placeholder="State" required />
       <p>Start date</p>
       <input type="date" name="start_date" value={pdata.start_date} onChange={handleChange} required />
       <p>End date</p>
       <input type="date" name="end_date" value={pdata.end_date} onChange={handleChange} required />
       <p>Description</p>
       <input type="text" name="description" value={pdata.description} onChange={handleChange} placeholder="Description" required />
       <br />
       <br />
     <span className="select">Select Rating
       <select name="event_rating" value={pdata.event_rating} onChange={handleChange} className="option" required>
           <option value="0">Select</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
       </select></span>
       <br />
       <br />
      <input id="btn" type="submit"  value="Submit" />
       </form>
</Stylediv>
    
   )
}