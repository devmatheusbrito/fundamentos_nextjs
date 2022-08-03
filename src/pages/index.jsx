
import Navegador from "../components/Navegador"
export default function Inicio(){
  return(
    <div style={{
      display: 'flex', 
      justifyContent:'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap:'wrap',
      }}>
      <Navegador texto='Estiloso' cor='blue' destino='/estiloso'/>
      <Navegador texto='Exemplo' cor='#9400d3' destino='/exemplo'/>
      <Navegador texto= 'Jsx' cor='crimson' destino='/jsx'/>
      <Navegador texto= 'Navegacao #01' cor='green' destino='/navegacao'/>
      <Navegador texto= 'Navegacao #02' cor='purple' destino='/cliente/RJ/123'/>
      <Navegador texto= 'Componente com estado' cor='pink' destino='/estado'/>
      <Navegador texto= 'Integracao com API#1' cor="#a45b71" destino='/integracao_1'/>
      <Navegador texto= 'Estatico' cor="#a45d31" destino='/estatico'/>

    </div>
  )
}