import Layout from "../components/Layout"

export default function Jsx(){

  const titulo = <h1> JSX é um conceito central</h1>

  function subtitulo(){
    return <h2>{"muito legal".toUpperCase()}</h2>
  }

  return(
    <Layout titulo="Entendo JSX">
      <div>
          {titulo}
          {subtitulo()}
          <p>
            {JSON.stringify({
              nome: 'Maria', idade:30
            })}
          </p>
        </div>
    </Layout>
  
  )
}