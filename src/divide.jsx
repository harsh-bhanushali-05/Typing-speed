import React,{useState} from "react";
import Array from "./dictionary";
import   "./styles.css";
var dig="";
var no=10
function random()
{
for(var i=0;i<no;i++){
  var ind=Math.floor(Math.random()*Array.length);
  if(i===0){
    dig=Array[ind];
  }
  else{
    dig=dig+" "+Array[ind];
  }
}
for(var i=0;i<dig.length;i++)
{
    return(
    <div>
    <div>dig.charAt(i)</div>
    </div>);
}
}
// function result(){
//     random();
//     return ( 
//     );
// }
export default random;