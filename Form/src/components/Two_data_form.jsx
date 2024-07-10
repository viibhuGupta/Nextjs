// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Two_data_form = () => {

    const [firstName , setfirstName] =useState("");
    const [lastName , setlastName] =useState("");

    console.log(firstName);
    console.log(lastName);

    function changeFirstName(event) {
        // console.log("printing first name")
        // console.log(event.target.value)
        setfirstName(event.target.value);
    }

    function changeLastName (event){
        // console.log("printing last name");
        // console.log(event.target.value)
        setlastName(event.target.value);
    }

  return (
    <>
    <form 
    action=""
    className='text-center justify-center '
    
    
    >

<br />
<br />
        <input  
        type="text"
        placeholder='First name'
        onChange={changeFirstName}
        />
<br />
<br />
        <input 
        type="text" 
        placeholder='last name'
        onChange={changeLastName}
        />

        
    </form>
    </>
  )
}

export default Two_data_form