import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {detailsDataLoading, detailsDataSuccess} from "../redux/actions";
import styled from "styled-components";
const ResultDiv = styled.div`
font-family:   Arial, sans-serif;

.box{
    margin:auto;
    margin-top:6vh;
    width:50%;
    height:auto;
    background-color: #284242;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    //  border:1px solid red; 
}
.text{
    width: 100%;
    margin-left: 10%;
      height: auto; 
      padding-bottom: 2vh;
      text-align: left;
      font-weight: bold;
      color: white;
      //  border:1px solid red; 
}
.head{
  color: red;
  font-size:1.5vw;
  margin-left: 10%;
}
p{
  font-size:1.2vw;
}
`;
export const EventDetails=()=>{
  
    const { loading, data, error } = useSelector((store) => store.data);  
    const dispatch = useDispatch();
    let {_id} = useParams();
let navigate=useNavigate();

    useEffect(()=>{
      getdata_p();
    },[])

    const getdata_p=()=>{
      dispatch(detailsDataLoading());
      axios.get(`https://event-mgts.herokuapp.com/events/${_id}`).then((data)=>{
        // console.log(data)
          dispatch(detailsDataSuccess(data.data.events));
        
      })
    }
   
// console.log(data.data)

return (
    <div>
      
        <ResultDiv> 
         {/* <button onClick={navigate("/")}>go</button> */}
            <div className="box">
              <h1 className="head">Event detail page</h1>
           <div className="text">
           <p>Event name : {data.data.event_name}</p>
            <p>Event Address : {data.data.event_address}</p>
            <p>City : {data.data.city}</p>
            <p>State : {data.data.state_name}</p>
            <p>Start date : {data.data.start_date}</p>
            <p>End date : {data.data.end_date}</p>
            <p>Event rating : {data.data.event_rating}</p>
            <p>Description : {data.data.description}</p>
           </div>
           
          </div>
      </ResultDiv>
    </div>
)
};