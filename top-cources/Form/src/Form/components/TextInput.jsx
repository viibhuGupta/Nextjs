/* eslint-disable no-unused-vars */

import React from 'react'

// eslint-disable-next-line react/prop-types
const TextInput = ({type, label, placeholder, value, onChange, name, id , spanCss ,inputCSS}) => {
    return (
        <fieldset >

            <div className='capitalize '>
                <label 
                htmlFor={id} 
                className={`block mb-4 `}>
                    
                    <span
                        className={`block mb-3 text-sm font-bold  ${spanCss || 'text-slate-700'}`}
                    >{label}</span>

                    <input
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        name={name}
                        id={id}
                        value={value}
                        className={`'px-3 py-2 text-sm bg-white border rounded-md bwlock bmt-1 border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 w-[60%]' ${inputCSS || 'w-[60%]' }`}
                    />
                </label>
            </div>

        </fieldset>
    )
}

export default TextInput