/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Radio_checked_form = () => {

    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", isVisible: true, mode: "" })

    console.log(formData)

    function changeHandler(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
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
                    placeholder='first name '
                    onChange={changeHandler}
                    name='firstName'
                    value={formData.firstName}
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder='Last name '
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
                    name='email'
                    value={formData.email}
                />

                <br />
                <br />

                <input
                    type="checkbox"
                    onChange={changeHandler}
                    name='isVisible'
                    id='isVisible'
                    checked={formData.isVisible}

                />
                <label htmlFor="isVisible">is i am Visible</label>

                <br />
                <br />

                <input
                    type="radio"
                    onChange={changeHandler}
                    name='mode'
                    id='online-mode'
                    value="online-mode"
                    checked={formData.mode === "online-mode"}

                />
                <label htmlFor="online-mode">Online mode</label>

                <br />
                <br />

                <input
                    type="radio"
                    onChange={changeHandler}
                    name='mode'
                    id='offline-mode'
                    value="offline-mode"
                    checked={formData.mode === "offline-mode"}
                />
                <label htmlFor="offline-mode">offline mode</label>

            </form>


        </>
    )
}

export default Radio_checked_form