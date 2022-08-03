import Layout from "../components/Layout"
import { useState } from "react"

export default function Estado(){

  
  const state = useState(0)
  let numero = state[0]
  let alterarNumero = state[1]
  function incrementar(){
    alterarNumero(numero+1)
    console.log(numero)
  }
  return(
    <Layout titulo='Componente com estado'>
      <span>{numero}</span>
      <button onClick={incrementar}>incrementar</button>
    </Layout>
    )
}