

import React , {useState} from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './App.css'
// import { Calendar } from "@natscale/react-calendar";

function Form() {
  const [selectedDate , setSelectedDate  ] =new useState(null);

  const handleDate =(date)=>{
    setSelectedDate(date)
  }
 

    // const [value, setValue] = useState();
 
    // const onChange = useCallback(
    //     (value) => {
    //         setValue(value);
    //     },
    //     [setValue]
    // );

const [name, setInput1] = useState('');
const [clg_adm_no, setInput2] = useState('');
const [mobile_no, setInput3] = useState('');
const [email_id, setInput4] = useState('');
const [ann_fam_income, setInput5] = useState('');
const [clg_adm_yr, setInput6] = useState('');
const [parents_name, setInput7] = useState('');
const [parents_mob, setInput8] = useState('');
const [distance, setInput9] = useState('');
const [clg_adm_type, setSelectedOption] = useState('');

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

    const [gender, setGender] = useState('');
    const [egrants, setEgrants] = useState('');
    const [clg_adm_cat, setAdmCategory] = useState('');
  
    const handleGender = (e) => {
      setGender(e.target.value);
    };
    const handleEgrants = (e) => {
      setEgrants(e.target.value);
    };
    const handleAdmCat = (e) => {
      setAdmCategory(e.target.value);
    };

const handleInput =(e)=>{
  const {name, value}=e.target;
  if(name==='name'){
    setInput1(value);
  }
  else if(name==='clg_adm_no'){
    setInput2(value);
  }
  else if(name==='mobile_no'){
    setInput3(value);
  }
  else if(name==='email_id'){
    setInput4(value);
  }
  else if(name==='ann_fam_income'){
    setInput5(value);
  }
  else if(name==='clg_adm_yr'){
    setInput6(value);
  }
  else if(name==='parents_name'){
    setInput7(value);
  }
  else if(name==='parents_mob'){
    setInput8(value);
  }
  else if(name==='distance'){
    setInput9(value);
  }
}


 const handleSubmit= async(e)=>{
  e.preventDefault();

  try{
    const body ={
      name, clg_adm_no, clg_adm_yr, clg_adm_type, clg_adm_cat,mobile_no, email_id, ann_fam_income, parents_name, parents_mob, distance, gender, egrants,
    };
    // console.log(body);
    const response= await fetch("http://localhost:5000/", {
      method :"POST",
      headers :{ "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(response);
    window.locaton="/";


  }
  catch(err){
    console.error(err.message);
  }

 };


  return (

    <div className=" flex items-center justify-center">
      

      <form className="bg-white border rounded shadow-md p-4"> 
     <div className="flex items-center justify-center mb-4 font-bold"><h1>Hostel Application Form</h1></div>
      <div className=" mb-4 flex flex-row ml-2">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Name:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={name} name="name" onChange={handleInput}   >
         </input>      
         </div>
         <div className="mb-4  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">College Admission No:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={clg_adm_no} name="clg_adm_no"   onChange={handleInput}>
         </input>      
         </div>
         
         <div className="mb-4  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">College Admission year:</label>
        <DatePicker  className=" border border-black rounded-md ml-2 "selected={selectedDate} onChange={handleDate} dateFormat="MM/dd/yyyy" />
        
       
         </div>

         <div className=" mb-4 ml-2   flex flex-row">
          
          <label className="block text-gray-700  text-sm font-bold mb-2">College Admission type:</label>
          <div className="">
          <label className="block text-gray-700">
            <input
              type="radio"
              name="option"
              value="option1"
              checked={clg_adm_type === 'option1'}
              onChange={handleRadioChange}
              className="mr-2 leading-tight"
            />
            LET
          </label>
          <label className="block text-gray-700">
            <input
              type="radio"
              name="option"
              value="option2"
              checked={clg_adm_type === 'option2'}
              onChange={handleRadioChange}
              className="mr-2 leading-tight"
            />
            College transfer
          </label>
          <label className="block text-gray-700">
            <input
              type="radio"
              name="option"
              value="option3"
              checked={clg_adm_type === 'option3'}
              onChange={handleRadioChange}
              className="mr-2 leading-tight"
            />
            Other
          </label>
          </div>


        </div>

         <div className="mb-4   flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Mobile No:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={mobile_no} name="mobile_no"   onChange={handleInput}>
         </input>      
         </div>

         <div className="mb-4  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">Email.Id:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={email_id} name="email_id"   onChange={handleInput}>
         </input>      
         </div>

        

        <div className="flex flex-row mb-4">
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold  ml-2"> Gender: </label>
        <select id="dropdown"  name="dropdown " value={gender} onChange={handleGender} className="border border-black rounded-md px-3 ml-2 ">
        <option value="">Select an option </option>
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>

        </select>
        </div>
        <div className="flex flex-row mb-4">
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold  ml-2 "> Admission category : </label>
        <select id="dropdown"  name="dropdown " value={clg_adm_cat} onChange={handleAdmCat} className="border border-black rounded-md  px-3 ml-2">
        <option value="">Select an option </option>
        <option value="SC" >SC</option>
        <option value="ST" >ST</option>
        <option value="PH" >PH</option>
        <option value="BPL" >BPL</option>
        <option value="GOIN" >GOIN</option>
        <option value="OTHER" >other</option>

        </select>
        </div>
        <div className="flex flex-row mb-4">
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold  ml-2 "> E-Grants Category: </label>
        <select id="dropdown"  name="dropdown " value={egrants} onChange={handleEgrants} className="border-black border rounded-md  px-3 ml-2">
        <option value="">Select an option </option>
        <option value="SC" >SC</option>
        <option value="ST" >ST</option>
        <option value="OBC" >OBC</option>
        <option value="OEC" >OEC</option>
        <option value="PH" >PH</option>
        <option value="other" >Other</option>

        </select>
        </div>
        <div className=" mb-4 flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Annual family income:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={ann_fam_income} name="ann_fam_income" onChange={handleInput}   >
         </input>      
         </div>
         <div className=" mb-4  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Distance from CET to home:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={distance} name="distance" onChange={handleInput}   >
         </input>      
         </div>
         <div className=" mb-4  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Parents name:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={parents_name} name="parents_name" onChange={handleInput}   >
         </input>      
         </div>
         <div className=" mb-4 flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Parents mobile:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={parents_mob} name="parents_mob" onChange={handleInput}   >
         </input>      
         </div>
         <div className="flex items-center justify-center">
         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={handleSubmit} >
          Submit

        </button>
        </div>

        
        
      </form>
      
    </div>
  )
}

export default Form
