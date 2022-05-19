import { Link } from "react-router-dom";
import styled from "styled-components";

const Stylediv=styled.div`
font-family: sans-serif;
   .nav{
       width: 100%;
       height: 6vh;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       padding-left:10%;
 
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
    margin-right: 20%;
}
`;
export const Navbar=()=>{


    return (
        <div>
          <Stylediv>
            <div className="nav">
             <Link to={"/"}>Home</Link>
             <Link to={"/productlist"}>Add Event</Link>
             <Link id="add" to={"/signup"}>Signup</Link>
            </div>

          
            </Stylediv>
        </div>
    )
}