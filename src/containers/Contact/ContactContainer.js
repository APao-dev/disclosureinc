import React from 'react';
// import { Link } from "react-router-dom";

import { useState } from "react";

export default function ContactContainer() {
    

            
            const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
        
            const handleInputChange = (e) => {
                setBuyer({
                  ...buyer,
                  [e.target.name]: e.target.value,
                });
              };
        


    return(
        <div>
            <h1>Sobre Nosotros</h1>
            <h3>Para conocernos mejor puedes seguirnos en las redes</h3>
            <p></p>
           
    {/* <div>
        <Link to="/cart" >
          <span>Ir al Carrito</span>
         </Link>
   </div> */}

    <div>
         <input
          type="text"
          name="name"
          onChange={handleInputChange}
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">Nombre</label>

        <input
          type="text"
          name="phone"
          onChange={handleInputChange}
          id="tel"
          placeholder=" "
        />
        <label htmlFor="tel">Teléfono</label>

        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          id="email"
          placeholder=" "
        />
        <label htmlFor="email">Email</label>

{/* QUIERO PONER UN ONCLICK PARA "createOrder"  ¿¿??*/}

    </div>

    </div> 
);
}
       