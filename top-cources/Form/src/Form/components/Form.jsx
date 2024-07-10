
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import TextInput from './TextInput'

const Form = () => {

    const [formData, setFormData] = useState({ Gender: " ", Name_of_Applicant: "", NameofFather: "", NameofMother: "", NameofHusband: "", MobileNo: "", email: " ", state: "", SubDivision: "", TypeofLocalBody: "", MunicipalCorporation: "", Distric: "", Block: "", WardNumber: "", Village: "", PostOffice: "", PoliceStation: "", PinCode: "", PresentAddress: false, AadhaarNumber: "", Profession: "", Category: "", Caste: "", SubCaste: "", Condition: "", })

    console.log(formData)

    function clickHandler(event) {
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
            <div className='w-full bg-white '>
                <div className='ml-2 mr-2 rounded-sm bg-primary'>
                    <form className='ml-4 capitalize' action="">

                        {/* Heading  */}
                        <div className="py-2 m-2 rounded-s bg-headings ">
                            <h2 className='flex justify-center'>Details of Applicant </h2>
                        </div>

                        {/* Gender */}

                        <fieldset  >
                            <label htmlFor="">Gender</label>
                            <br />


                            <div className=''>
                                <input

                                    type="radio"
                                    onChange={clickHandler}
                                    name="Gender"
                                    id="male"
                                    value="male"
                                    checked={formData.Gender === "male"}
                                />
                                <label
                                    htmlFor="male"
                                    className='ml-1 mr-3'
                                >Male</label>

                                <input
                                    type="radio"
                                    onChange={clickHandler}
                                    name="Gender"
                                    id="female"
                                    value="female"
                                    checked={formData.Gender === "female"}
                                />
                                <label
                                    htmlFor="female"
                                    className='ml-1 mr-3'
                                >female</label>

                                <input
                                    type="radio"
                                    onChange={clickHandler}
                                    name="Gender"
                                    id="ThirdGender"
                                    value="ThirdGender"
                                    checked={formData.Gender === "ThirdGender"}
                                />
                                <label
                                    htmlFor="ThirdGender"
                                    className='ml-1 mr-3'
                                >ThirdGender</label>

                            </div>

                        </fieldset>


                        <fieldset className="mt-4 applicantDetails">

                            <TextInput
                                type="text"
                                label="Name of Applicant"
                                onChange={clickHandler}
                                name="Name_of_Applicant"
                                id="Name_of_Applicant"
                                value={formData.Name_of_Applicant}
                            />

                            <TextInput
                                type="text"
                                label="Name of Father"
                                onChange={clickHandler}
                                name="NameofFather"
                                id="NameofFather"
                                value={formData.NameofFather}
                            />

                            <TextInput
                                type="text"
                                label="Name of Mother"
                                onChange={clickHandler}
                                name="NameofMother"
                                id="NameofMother"
                                value={formData.NameofMother}
                            />

                            <TextInput
                                type="text"
                                label="Name of Husband"
                                onChange={clickHandler}
                                name="NameofHusband"
                                id="NameofHusband"
                                value={formData.NameofHusband}
                            />


                            <TextInput
                                type="tel"
                                label="Mobile No. of Applicant (Required for delivery of Certificate through Download Link in SMS) "
                                onChange={clickHandler}
                                name="MobileNo"
                                id="MobileNo"
                                value={formData.MobileNo}
                                spanCss="text-red-500"
                            />

                            <TextInput
                                type="email"
                                label="Email of Applicant (Required for delivery of Certificate as attachment in Email) "
                                onChange={clickHandler}
                                name="email"
                                id="email"
                                value={formData.email}
                                spanCss="text-red-500 "
                                inputCSS="w-[80%]"
                            />
                            
                        </fieldset>



                        <fieldset className="mt-4 ">


                        </fieldset>

                    </form>
                </div>

            </div>

        </>
    )
}

export default Form