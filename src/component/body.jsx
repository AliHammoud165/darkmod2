import React from 'react'
import { useDarkmode } from './context';
import './darkbutton.css'
const body = () => {
    const { Body } = useDarkmode();
  console.log(Body)
    return (
    <div className={Body}>
      <h1>HELLO WORD</h1>
    </div>
  )
}

export default body
