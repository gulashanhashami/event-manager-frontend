
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess } from "../redux/userReducer/actions";
const ResultDiv = styled.div`
font-family:   Arial, sans-serif;

height: 45vh;
 margin:auto;
 // border:1px solid red;

form{
 width: 30%;     
 height: 76%;
 margin:auto;
 // border:1px solid red;
}

input{
 font-size:1.2vw;
      width: 78%;     
   height: 14%;
}
p{
 font-size:1.2vw;
      margin-right: 18%;
}
 
 a{
   margin-right: 13%;
   text-decoration: none;
   font-size:1.2vw;
   color: white;
 }
 a:hover{
   color: red;
 }
 
  #btn{
      width: 80%;
      height: 16%;
      cursor: pointer;
      color: white;
      border-radius: .3vw;
      background-color: green;
      border: .2vw solid green;
  }
  #btn:hover{
  background-color: white;
  color: red;
  }
  .textsup{
    font-size:1.2vw;
    margin-left: 9% ;
  }
  #sign{
    color: green;
  }
  #sign:hover{
    color: red;
  }
`;
export const Signin=()=>{
 const [sign_data, setSdata]= useState({});
 const {loading, data, error} =useSelector((store)=> store.data.data);
 const dispatch=useDispatch();
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
          dispatch(loginStart())
          axios.post(`https://eventbackend.onrender.com/login`, sign_data).then(({data})=>{
           //  console.log(res.data)
           dispatch(loginSuccess(data));
              alert("Login successfully")
             navigate("/")
             
          }).catch((error) => {
            if(error.response.data.error){
              alert("Please enter same email id and password")
            }
           console.log(error.response.data.message);
       })
       }}>
           <p>Enter email</p>
           <input type="email" name="email" value={sign_data.email}  placeholder="Enter email" onChange={handleChange} required />
           <p>Enter password</p>
           <input type="password" name="password" value={sign_data.password} placeholder="Enter a password" onChange={handleChange} required />
           <br />
           <br />
           <input id="btn" type="submit" value="Login" />
           <br />
           <p className="textsup">Create an account <span><Link id="sign" to={"/signup"}>Sign-Up now</Link></span></p>
       </form>
       
       </ResultDiv>
       </div>
   )
}