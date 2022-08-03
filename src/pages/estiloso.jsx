import style from '../styles/Estiloso.module.css'
import Link from "next/link"
import Layout from '../components/Layout'

export default function estiloso(){

  return(
    <>
      <Layout titulo="Exemplo de css modularizado">
        <div className={style.roxo}>
          <Link href='/'>Voltar</Link>
          <h1>Estilo usando CSS MODULOS</h1>
        </div>
      </Layout>
    </>
  )
}