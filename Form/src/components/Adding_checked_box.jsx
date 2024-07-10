// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Adding_checked_box = () => {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: " ", isVisible: true })

    console.log(formData)

    function changeHandler(event) {
        const { name, value, type, checked } = event.target

        setFormData(prevFromData => {
            return {
                ...prevFromData,
                [name]: type === "checkbox" ? checked : value


            }
        })
    }
    return (
        <>

            <form className='justify-center text-center' action="">

                <br />
                <br />
                <input
                    type="text"
                    placeholder='first name'
                    onChange={changeHandler}
                    name='firstName'
                    value={formData.firstName}

                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder='last name'
                    onChange={changeHandler}
                    name='lastName'
                    value={formData.lastName}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder='enter your email address'
                    onChange={changeHandler}
                    name="email"
                    value={formData.email}
                />

                <br />
                <br />

                <input
                    type="checkbox"
                    onChange={changeHandler}
                    name="isVisible"
                    id="isVisible"
                    checked={formData.isVisible}
                />

                <label htmlFor="isVisible">am i Visible ? </label>
            </form>
        </>
    )
}

export default Adding_checked_box