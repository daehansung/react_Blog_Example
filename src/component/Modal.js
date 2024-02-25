import React from 'react';
import '../component/Modal.css';
import { useState } from 'react';



function Modal(props){
    return(
        <div className= "modal">
        <h4>{props.title}</h4>
        <p>{props.date}</p>
        <p>{props.rmk}</p>
      </div>
    )
}

export default Modal;