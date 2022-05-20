
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {
    getDataLoading,
    getDataSuccess,
  } from "../redux/actions";
  import axios from "axios";

  import styled from "styled-components";

  const ResultDiv = styled.div`
  font-family: sans-serif;

.filter{
  width: 20%;
  font-weight: bold;
  font-size: 1.2vw;
  height: 3.5vh;
  margin-right: 10%;
  border-radius: .3vw;
}
.sort{
  width: 20%;
  font-weight: bold;
  font-size: 1.2vw;
  height: 3.5vh;
  border-radius: .3vw;
}
  #searchbar{
    width: 100%;
    height: 5vh;
    margin-left:7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.2vw;
    color: white;
    margin-top: 2vh;
    align-items: center;
    background-color: #f6eeee;
    /* border: 1px solid red; */
  }
  
  table{
    width:97%;
    height:auto;
      margin: auto;
      margin-top: 7vh;
      // border: .1vw solid red;
  }
  th, td{
    padding: .6vh;
    border-bottom: .1vw solid grey;
}
th{
    font-weight: bold;
    font-size: 1.4vw;
    /* border: 2px solid grey; */
}
td{
  font-size: 1.2vw;
  text-align:center;
}
tr:hover{
  background-color: teal;
  /* font-weight: bold; */
  color: white;
}

  a{
    text-decoration: none;
    color:white;
  }
  a:hover{
    color: red;
  }
  
h4:hover{
  color:red;
}
.rt{
  margin-left: 100px;
}
.btndiv{
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:auto ;
 
}
.pagebtn{
  width: 10vh;
  height: 4.8vh;
  margin: auto;
  color: white;
  font-size: 1vw;
  border-radius: .3vw;
  // font-weight: bold;
  background-color: blue;
  border: .2vw solid blue;
}
.pagebtn:hover{
  background-color: white;
  color: red;
}
// .sign{
//   /* float: right; */
//   margin-right: 15%;
// }
#btn1{
    color:white;
    font-size:1.2vw;
    border-radius: .3vw;
    background-color: blue;
    border:.2vw solid blue;
   
  }
  #btn1:hover{
    background-color: white;
  color: red;
  }
  #btn2{
    color:white;
    font-size:1.2vw;
    border-radius: .3vw;
    background-color: blue;
    border:.2vw solid blue;
   
  }
  #btn2:hover{
    background-color: white;
  color: red;
  }
#btn3{
    color:white;
    font-size:1.2vw;
    border-radius: .3vw;
    background-color: red;
    border:.2vw solid red;
   
  }
  #btn3:hover{
    background-color: #310202;
  }
  .sbox{
    display: flex;
    flex-direction: row;
 width: 45%;
    height: 4.3vh; 
    //  border: 2px solid red; 
}
.in{
  width: 88%;
  height: 3.5vh;
  outline: none;
}
#btn{
  width: 10%;
  height: 4.3vh;
  color: white;
  font-size: 1vw;
  background-color: black;
  border: 2px solid black;
}
#btn:hover{
background-color: white;
color: red;
}
  // #sbarbox{
  //   width: 40%;
  //   display: flex;
  //   flex-direction: row;
  //   /* border:2px solid red; */
  // }
  // #sbtn{
  //   color: white;
  //   font-size:1.2vw;
  //   font-weight: bold;
  //   background-color: black;
  // }
  // #sbtn:hover{
  //   background-color: #09fd09;
  // }
`;

  export const Home = () => {
    const [page, setPage]= useState(1);
    const [sdata, setSd]= useState("");
    const { loading, data, error } = useSelector((store) => store.data); 
    const dispatch = useDispatch();
var c=1;

    useEffect(() => {
      getDatas();
    }, [page]);

    const getDatas = () => {
      
        dispatch(getDataLoading());
        axios.get(`https://hidden-gorge-89507.herokuapp.com?_page=${page}&_limit=7`).then(({ data }) => {
          dispatch(getDataSuccess(data));
        });
      };

      let handleRemove = (e) => {
        axios.delete(`https://hidden-gorge-89507.herokuapp.com/${e._id}`)
            .then((res) => {
              getDatas()
            
            })
            .catch((err) => {
               console.log(err);
            })
    }
    function resultRate(e){
      if(e.target.value==="low"){
        var arr1=data.sort((a,b)=>a.event_rating-b.event_rating)
        dispatch(getDataSuccess(arr1));
        //  console.log(arr1)
      }else{
        var arr2=data.sort((a,b)=>b.event_rating-a.event_rating)
        dispatch(getDataSuccess(arr2));
        // console.log(arr2)
      }
    }

    function result1(e){
     
      if(e.target.value==="varanasi"){
        var arr3=data.filter(e=>e.city==="Varanasi");
       dispatch(getDataSuccess(arr3));
        //  console.log(arr3)
      }
      else if(e.target.value==="ghaziabad"){
        var arr4=data.filter(e=>e.city==="Ghaziabad");
        dispatch(getDataSuccess(arr4));
         //  console.log(arr3)
       }
       else if(e.target.value==="delhi"){
         var arr5=data.filter(e=>e.city==="Delhi");
        dispatch(getDataSuccess(arr5));
         //  console.log(arr3)
       }
       else if(e.target.value==="bangalore"){
         var arr6=data.filter(e=>e.city==="Bangalore");
        dispatch(getDataSuccess(arr6));
         //  console.log(arr3)
       }
    }
    const handleSearch=()=>{
      var arr=data.filter((value)=>{
        if(sdata===""){
          // console.log(value)
           return value;
        }
        else if(value.event_name.toLowerCase().includes(sdata.toLowerCase())){
        
           return value;
        }
      })
      dispatch(getDataSuccess(arr));
      console.log(arr)
    }
     
      return (
        <div>
         <ResultDiv>
         
         
          <div id="searchbar">
          <div className="sbox">
                    <input className="in" type="text" onChange={(e)=>setSd(e.target.value)} />
                <button id="btn" onClick={()=>{
                  handleSearch();
                }}>Search</button>
                </div>
            <select onChange={
             resultRate

            } name="" className="sort">
              <option value="">Sort by rating</option>
              <option value="low">Low to high</option>
              <option value="high">High to low</option>
            </select>


            <select onChange={result1} name="" className="filter">
              <option value="">Filter by city</option>
              <option value="varanasi">Varanasi</option>
              <option value="ghaziabad">Ghaziabad</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>
          </div> 
         
          <div className="box1">
            
          <table>
            <thead>
                <th>S.no</th>
                <th>Event name</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Rating</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return (
                      
                        <tr key={item.id}>
                         
                         <td>{c++}</td>
                         <td>{item.event_name}</td>
                         <td>{item.event_address}</td>
                         <td>{item.city}</td>
                         <td>{item.state_name}</td>
                         <td>{item.start_date}</td>
                         <td>{item.end_date}</td>
                         <td>{item.event_rating}</td>
                         <td>
                               <button id="btn3" onClick={()=>{
                                 handleRemove(item)
                               }}>
                                 Delete
                               </button>
                             </td>
                             <td>
                            <Link to={`${item._id}/edit`}>
                              <button id="btn2">Edit</button>
                             </Link>
                             </td>
                         <td>
                            <Link to={`${item._id}/detail`}>
                              <button id="btn1">Details</button>
                             </Link>
                             </td>
                        </tr>
                       
                    )
                })}
              
            </tbody>
         </table>  
          </div>
          <div className="btndiv">
          <button className="pagebtn"
        onClick={() => {
       setPage(page-1);
        }}
      >
        Prev
      </button>

      <button className="pagebtn"
        onClick={() => {
      setPage(page+1);
        }}
      >
        Next
      </button>
      </div>
          </ResultDiv>
        </div>
      );
    };
