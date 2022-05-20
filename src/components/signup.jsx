
 import axios from "axios";
 import { useState } from "react";
 import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
 const ResultDiv = styled.div`
 font-family:   Arial, sans-serif;
   
  height: 55vh;
  margin:auto;
  // border:1px solid red;
form{
  width: 30%;     
  height: 85%;
  margin:auto;
  // border:1px solid red;
}

 input{
  font-size:1.2vw;
       width: 79%;     
    height: 10%;
 }
 p{
  font-size:1.2vw;
       font-weight: bold;
       margin-right: 18%;
 }
  
  a{
    font-size:1.2vw;
    margin-right: 13%;
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: red;
  }
  
   #btn{
       width: 81%;
       height: 12%;
       color: white;
       font-size:1.2vw;
       font-weight: bold;
       background-color: green;
       border-radius: .3vw;
       border: .2vw solid green;
   }
   #btn:hover{
   background-color: white;
   color: red;
  //  font-size: 2.2vh;
   }
   

   .textsup{
    font-size:1.2vw;
   }
   #sign{
     color: green;
   }
   #sign:hover{
     color: red;
   } 
 `;
export const Signup=()=>{
const [sign_data, setSdata]= useState({});
const [mobile, setmob] =useState();
const [pass, setPass] =useState();
let navigate=useNavigate();

  const handleChange=(e)=>{
    var key=e.target.name;
    setSdata({
      ...sign_data,
      [key]:e.target.value
    })
  }

    return (
        <div>
           <ResultDiv> 
           
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(mobile!==10){
              alert("Please enter 10 digits mobile number");
              return;
          }
          if(pass<6){
            alert("Password must contain six or more characters");
            return;
          }
          axios.post(`https://hidden-gorge-89507.herokuapp.com/register`, sign_data).then((res)=>{
            // console.log(res)
              alert("You have registered successfully")
              navigate("/signin")
              
          }).catch(error => {
            if(error.response.data.error){
               alert("User already exist")
            }
            console.log(error.response.data.message)
        });
        }
        }>
        <p>Enter full name</p>
            <input type="text" name="full_name" value={sign_data.full_name} placeholder="Enter full name" onChange={handleChange} required />
            <p>Enter mobile</p>
            <input type="number" name="mobile" value={sign_data.mobile} placeholder="Enter mobile" onChange={(e)=>{
              handleChange(e);
              setmob((e.target.value).length)
              }} required />
            <p>Enter email</p>
            <input type="email" name="email" value={sign_data.email}  placeholder="Enter email" onChange={handleChange} required />
            <p>Enter password</p>
            <input type="password" name="password" value={sign_data.password} placeholder="Enter a password" onChange={(e)=>{
              handleChange(e);
              setPass((e.target.value).length);
              }} required />
            <br />
            <br />
            <input id="btn" type="submit" value="Register" />
            <br />
            <p className="textsup">Already have an account? <span><Link id="sign" to={"/signin"}>Login now</Link></span></p>
        </form>
       
        </ResultDiv>
        </div>
    )
}