
import './App.css';
import Tablero from './components/Tablero';
import Banco from './components/Banco';
import Ficha from './components/Ficha';
import TirarBola from './components/TirarBola';
import { useEffect, useState } from 'react';
function App() {

  const resultados = [
    [0,'green'],
    [1,'red'],
    [2,'black'],
    [3,'red'],
    [4,'black'],
    [5,'red'],
    [6,'black'],
    [7,'red'],
    [8,'black'],
    [9,'red'],
    [10,'black'],
    [11,'black'],
    [12,'red'],
    [13,'black'],
    [14,'red'],
    [15,'black'],
    [16,'red'],
    [17,'black'],
    [18,'red'],
    [19,'red'],
    [20,'black'],
    [21,'red'],
    [22,'black'],
    [23,'red'],
    [24,'black'],
    [25,'red'],
    [26,'black'],
    [27,'red'],
    [28,'black'],
    [29,'black'],
    [30,'red'],
    [31,'green'],
    [32,'red'],
    [33,'black'],
    [34,'red'],
    [35,'black'],
    [36,'red']
  ]



  const pulsarFicha = function(num,setFicha){
    console.log(typeof fichaSeleccionada)
    setFichaSeleccionada(num)
    setFicha(num)

  }

  const [fichaSeleccionada, setFichaSeleccionada] = useState('2')
  const [fichas,setFichas] = useState(15)
  const [fichasEnJuego,setFichasEnJuego] = useState(0)
  const [fichasColocadas,setFichasColocadas] = useState(new Map())
  const [resultadoTirada, setResultadoTirada] = useState(null)

  useEffect(() => {

    console.log(fichasEnJuego)

  },[fichasEnJuego])


  useEffect(()=>{

   
    if(resultadoTirada != null){

      

      console.log(fichasEnJuego)
      console.log(fichasColocadas)



      if(fichasColocadas.has(`${resultadoTirada}`)){//*35

      
        let suma_fichas = parseInt(fichasColocadas.get(`${resultadoTirada}`)) * 35

        setFichas(fichas + suma_fichas )

      }

      if(fichasColocadas.has('1-18')){

        

        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {

          if(resultadoTirada >= 1 && resultadoTirada <= 18){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })

      }
      if(fichasColocadas.has('19-36')){


        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada >=19 && resultadoTirada <= 32){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })
        
      }
      if(fichasColocadas.has('1-12')){


        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada >=1 && resultadoTirada <= 12){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 6)) 
          }
        })
        
      }
      if(fichasColocadas.has('13-24')){


        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada >=13 && resultadoTirada <= 24){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 6)) 
          }
        })
        
      }
      if(fichasColocadas.has('25-36')){


        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada >=25 && resultadoTirada <= 36){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 6)) 
          }
        })
        
      }
      if(fichasColocadas.has('PAR')){

        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada % 2 === 0){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })

      }
      if(fichasColocadas.has('IMPAR')){

        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          if(resultadoTirada % 2 !== 0){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })

      }

      if(fichasColocadas.has('RED')){

        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          console.log(resultados[parseInt(resultadoTirada)])
          if(resultados[parseInt(resultadoTirada)][1] === 'red'){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })

      }

      if(fichasColocadas.has('BLACK')){

        fichasColocadas.forEach((nFichasPorRecuadro, recuadro) => {
          console.log(resultados[parseInt(resultadoTirada)])
          if(resultados[parseInt(resultadoTirada)][1] === 'black'){
            setFichas(fichas + (parseInt(nFichasPorRecuadro) * 2)) 
          }
        })

      }


      

    }
    setFichasEnJuego(0)
    setFichasColocadas(new Map())
    

  },[resultadoTirada])

useEffect(()=>{

  const valorTirada = [0];
  if(resultadoTirada !== null){
    valorTirada[0] = resultadoTirada
  }

  console.log(fichasColocadas)


   let total = 0;


   for (const fichasporcasilla of fichasColocadas.values()) {
    console.log(fichasporcasilla)
    total += fichasporcasilla;
  }
  if(valorTirada[0] != resultadoTirada){
    setFichasEnJuego(0)
  }
  else{
    setFichasEnJuego(total)
  }
  



   

},[() => {
  let ret = 0
  for (const nfichas of fichasColocadas.values()) {
    ret += nfichas;
  }
  return ret
}, fichasColocadas.size,resultadoTirada])

  return (
    <div className="App">
      <header>
        <div className='banco'>
          <Banco fichas={fichas} fichasenjuego={fichasEnJuego} />
        </div>
        <div className='titulo'>
          <div>
            <h1>Ruleta by pplu24k</h1>
          </div>
          <div>
            
          </div>
        </div>
        <div className='datos'>
          datos
        </div>
      </header>
      
      <TirarBola resultados={resultados} setresultadotirada={setResultadoTirada} cambiarfichasenjuego={setFichasEnJuego} cambiarfichascolocadas={setFichasColocadas}/>
      <div className='box-tablero'>
        <Tablero className='tablero' fichasel={fichaSeleccionada} fichascolocadas={fichasColocadas} establecerFichas={setFichasColocadas} mfichas={fichas} setmfichas={setFichas} cambiarfichasenjuego={setFichasEnJuego} fichasenjuego={fichasEnJuego}/>
      </div>
      <div className='fichas'>
        <Ficha number='2' color='cgreen' fichasel={fichaSeleccionada} click={pulsarFicha}/>
        <Ficha number='5' color='cblue' fichasel={fichaSeleccionada} click={pulsarFicha}/>
        <Ficha number='10' color='corange' fichasel={fichaSeleccionada} click={pulsarFicha}/>
        <Ficha number='50' color='cviolet' fichasel={fichaSeleccionada} click={pulsarFicha}/>
        <Ficha number='100' color='cred' fichasel={fichaSeleccionada} click={pulsarFicha}/>
        
      </div>
    </div>
  );
}

export default App;
