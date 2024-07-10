"use client"
import React, { useState } from 'react'   
import styles from "./style.module.scss"
import Button from "./Button"
export default function index() {
    const [isActive , setIsActive] = useState(false);
  return (
    <div className={styles.header} >
        <Button isActive = {isActive} setIsActive={setIsActive}/>
    </div>
  )
}
