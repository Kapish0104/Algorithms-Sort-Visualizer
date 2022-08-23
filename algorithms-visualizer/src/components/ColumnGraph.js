import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";



export default function ColumnGraph(props) { 
  var wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}



  return (
    <>
    <div className="container"> 
        <Chart chartType="ColumnChart" width="100%" height="70vh" data={props.data} />


    </div>
    </>
  )
}
