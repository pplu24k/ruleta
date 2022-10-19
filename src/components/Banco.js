import React from 'react'
import { useState , useEffect} from 'react'



export default function Banco({fichas , fichasenjuego}) {



useEffect(() => {
    
  },[])

  return (
    <div>
      <div>
        <p>Fichas: {fichas}</p>
      </div>
      <div>
        <p>Fichas en juego: {fichasenjuego}</p>
      </div>

    </div>
  )
}
