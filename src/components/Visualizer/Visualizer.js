import React from 'react'
import './Visualizer.css'

export default function Visualizer(props) {
    return(
        <div className="container
        ">
            
            <p>El producto ingresado es:{props.greeting} </p>


        </div>
    )
}