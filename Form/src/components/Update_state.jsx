// update state using usestate and taking with prev state

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Update_state = () => {

    const [formData , setFormData] = useState ({firstName : "" , lastName : " " , email : ""})
    console.log(formData);

    function changeHandler(event){
        setFormData  (prevFormData => {
            return {
                ...prevFormData,
                 [event.target.name] : event.target.value
            }
        })

    }
  return (
    <>

    <form className='text-center justify-center' action="">

        <input  type="text"
        placeholder='First name'
        onChange={changeHandler}
        name='firstName'

        />

<br />
<br />
        <input 
        type="text"
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        />

<br />
<br />

        <input 
        type="email"
        placeholder='enter your email id '
        onChange={changeHandler}
        name='email'
        />
    </form>
    
    </>
  )
}

export default Update_state