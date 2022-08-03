import Layout from "../../../components/Layout";
import {useRouter} from 'next/router'
import { useEffect } from "react";

export default function ClientePorCodigo(){
  const router = useRouter();
  
  return(
    <Layout titulo='Navegação Dinamica'>
      <div>Filial = {router.query.filial}</div>
      <div>Código = {router.query.codigo}</div>
    </Layout>
  )
}