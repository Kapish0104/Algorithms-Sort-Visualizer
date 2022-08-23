import React, { useState } from 'react'

export default function RangeSlider(props) {

    const [sortingSpeed, setSortingSpeed] = useState(Number(300));

    const changeArray = (event)=>{

        if(event.target.value === "10") setSortingSpeed(Number(300));
        else if(event.target.value === "20") setSortingSpeed(Number(60));
        else if(event.target.value === "30") setSortingSpeed(Number(30));
        else if(event.target.value === "40") setSortingSpeed(Number(25));
        else if(event.target.value === "50") setSortingSpeed(Number(10));
        else if(event.target.value === "60") setSortingSpeed(Number(10));
        
        
        let array=[];
        array.push(["", "", { role: "style" }]);
        for(let i = 0; i< event.target.value;i++) { 
          array.push(["",parseInt(Math.random()*event.target.value*5),"#4d4d4d"]);
        } 
        props.setData(array);
      }
    
      const delay = ms => new Promise(res => setTimeout(res, ms));
    
    async function sortArray(){
        let newArray = JSON.parse(JSON.stringify(props.data));
    
        props.setData(newArray);
        
       // Bubble sort

        for(let i =0;i<newArray.length - 1;i++) {
          for(let j =0;j<newArray.length - i - 1;j++) {  
    
              if(newArray[j][1] > newArray[j+1][1]) {  
                newArray[j][2] = 'green'; 
                newArray[j+1][2] = 'green';  
                props.setData(JSON.parse(JSON.stringify(newArray)));
                await delay(sortingSpeed);
                 
                let tmp = newArray[j][1];     
                newArray[j][1] = newArray[j+1][1]; 
                newArray[j+1][1] = tmp;
                  
                newArray[j][2] = '#4d4d4d';
                newArray[j+1][2] = '#4d4d4d';
                props.setData(JSON.parse(JSON.stringify(newArray)));
                await delay(sortingSpeed); 
                
              }
          }
        }
        
    // //Insertion Sort

    //     for(let i =1;i<newArray.length;i++) {
    //         console.log("i=" + i + " Array=" + newArray);
    //         let key = Number(newArray[i][1]);

    //         newArray[i][2] = 'red';
    //         props.setData(JSON.parse(JSON.stringify(newArray)));
    //         await delay(sortingSpeed); 

    //         newArray[i][2] = '#4d4d4d';
    //         props.setData(JSON.parse(JSON.stringify(newArray)));

    //         let j = i-1;
    //         while(j>=1 && newArray[j][1] > key) {
    //             newArray[j+1][2] = 'red';
    //             props.setData(JSON.parse(JSON.stringify(newArray)));
    //             await delay(sortingSpeed); 

    //             newArray[j+1][1] = newArray[j][1];

    //             newArray[j+1][2] = '#4d4d4d';
    //             props.setData(JSON.parse(JSON.stringify(newArray)));
    //             await delay(sortingSpeed);

    //             j = j-1;
    //         }
    //         newArray[j+1][1] = key;

    //         newArray[j+1][2] = 'red';
    //         props.setData(JSON.parse(JSON.stringify(newArray)));
    //         await delay(sortingSpeed); 

    //         newArray[j+1][2] = '#4d4d4d';
    //         props.setData(JSON.parse(JSON.stringify(newArray)));
    //         console.log();
    //     }
        
      }
    
      const generateArray = ()=> {
        let array = [];
        array.push(["", "", { role: "style" }]);
        for(let i = 0; i< props.data.length-1;i++) {
          array.push(["",parseInt(Math.random()*(props.data.length-1)*5),"#4d4d4d"]);
        } 
        props.setData(JSON.parse(JSON.stringify(array)));
      }

    return (
        <div>
            <div className="container">
            <label htmlFor="customRange3" className="form-label">Change Array Size</label>
            <input onChange={changeArray} type="range" className="form-range" min="10" max="60" step="10"  id="customRange3"/>
            <button onClick={sortArray} type="button" className="btn btn-primary btn-lg mx-3 my-3">Start Sorting</button>
            <button onClick={generateArray} type="button" className="btn btn-primary btn-lg mx-3 my-3">Shuffel array</button>
            </div>
        </div>
    )
}
