import React, {  useState } from 'react'
import './App.css';

function App() {
    const[weight,setweight]= useState()
    const[height,setheight]=useState()
    const[bmi,setbmi]=useState()
    const[bmistatus,setbmistatus]=useState()
    const[error,seterror]=useState()

    const calculatebmi=()=>{
      const isvalidHeight=/^\d*$/.test(height);
      const isvalidWeight=/^\d*$/.test(weight)
      if(isvalidHeight&&isvalidWeight){
        const heightInMeters=height/100;
        const bmivalue=weight/(heightInMeters*heightInMeters);
        setbmi(bmivalue.toFixed(2));
        if(bmivalue<18.5){
          setbmistatus("Under  Weight");
        }else if(bmivalue>=18.5 && bmivalue<24.9){
          setbmistatus("Normal Weight");
        }else if(bmivalue>=25 && bmivalue<29.9){
          setbmistatus("Over Weight")
        }else{
          setbmistatus("Obese")
        }
      }
      else{
        setbmi(null)
        setbmistatus("")
        seterror("Please enter vaild numeric values for height and weight")
      }
    } 

    const clearAll=()=>{
      setheight('')
      setweight('')
      setbmi(null)
      setbmistatus('')

    }
       return (
   <div className='bmi-calculator'>
     <div className='Box'></div>
     <div className='data'>
       <h1>BMI Calculator</h1>
       {error && <p className='error'>{error}</p>}
        <div className='input-container'>
          <label htmlFor='height' >Height (cm):</label>
          <input type='text' id='height' value={height} onChange={(e)=>setheight(e.target.value)}/>
        </div>
        <div className='input-container'>
          <label htmlFor='weight' >Weight (kg):</label>
          <input type='text' id='weight' value={weight} onChange={(e)=>setweight(e.target.value)} />
        </div>
        <button onClick={calculatebmi}>calculate BMI</button>
        <button onClick={clearAll}>Clear</button>
      { bmi !==null && <div className='result'>
         <p>Your BMI is:{bmi} </p>
        <p>Status:{bmistatus}</p>
       </div>}
      </div>
   </div>
  );
}

export default App;
