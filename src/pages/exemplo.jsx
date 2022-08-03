import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Example(){
  return(
    <Layout titulo='Exemplo usando components'>
      <Cabecalho titulo='Nextjs & Reactjs'/>
      <Cabecalho titulo='Aprenda fundamentos de Reactjs'/>
    </Layout>
    
  )
}