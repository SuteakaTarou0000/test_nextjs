"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import { stringifyCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { error } from "console";

export default function Home() {

  const mockDataList = [
    {
      username: "tomato",
      age: 25,
      id: "SHA256Hash1"
    },
    {
      username: "potato",
      age: 26,
      id: "SHA256Hash2"
    }
  ]
  
  const [dataList,setDataList] = useState([]);
  
  const onChange = (e) => {
    if(e.target.id==="input1"){setDataList([])}else{setDataList(mockDataList)}
  }
  return (
    <>
      
      <div id={styles.selectBoxContainer}>
        <ul>
          <li>
            <label for="input1">don't get data.</label>
            <input type="radio" id="input1" name="dataDisplay" onChange={(e)=>onChange(e)}/>
          </li>
          <li>
            <label for="input2">get and show data.</label>
            <input type="radio" id="input2" name="dataDisplay" onChange={(e)=>onChange(e)}/> 
          </li>
        </ul>      
      </div>
      <div id="dataContainer">
        {dataList?.length===0?
        <>
          {`no data...`}
        </>
        :
        <ul>
          <>
          {
            dataList.map((data,index)=>{
              return(
                <li key={index}>
                  <p>{`username: ${data.username}`}<br />{`age: ${data.age}`}<br />{`id: ${data.id}}`}</p>
                </li>
              )
            })
          }
          </>
        </ul>
        }
      </div>
    </>
  );
}
