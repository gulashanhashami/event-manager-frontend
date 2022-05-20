import { Link } from "react-router-dom";
import styled from "styled-components";

const Stylediv=styled.div`
font-family:   Arial, sans-serif;
   .nav{
       width: 100%;
       height: 6vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
         padding-left:7%;
       background-color: black;
   }

a{
    font-size: 1.2vw;
    font-weight: bold;
    text-decoration: none;
    color: white;
}
a:hover{
    color: red;
}
#add{
    margin-right: 11%;
}
`;
export const Navbar=()=>{


    return (
        <div>
          <Stylediv>
            <div className="nav">
             <Link className="navhome" to={"/"}>Home</Link>
             <Link to={"/addevent"}>Add Event</Link>
             <Link id="add" to={"/signin"}>Signin</Link>
            </div>

          
            </Stylediv>
        </div>
    )
}