import { data } from '../data/data';
import '../CSS/Home.css';


export function Name() {
  let arrAcoes = []
  let ordenado = []
  let variacaoT = []
  let variacaoM = []
  function sortData() {
    ordenado = data.reports.sort((a, b) => a.investmentId > b.investmentId ? 1 : a.investmentId < b.investmentId ? -1 : (a.month>b.month ? 1: a.month<b.month ? -1: 0))
  }
  sortData();

  function rendTotal() {

    for (let i = 0; i < data.investments.length; i++) {
      for (let j = 0; j < data.reports.length; j++) {
        if (data.reports[j].investmentId === data.investments[i].id) {
          arrAcoes.push(data.reports[j].value)
        }
      }
      variacaoT.push((((arrAcoes[arrAcoes.length - 1] - arrAcoes[0]) / arrAcoes[0]) * 100).toFixed(2));
    }

    for (let i = 0; i < data.investments.length; i++) {
      let k = 0
      for (let j = 0; j < ordenado.length; j++) {
        if (ordenado[j].investmentId === data.investments[i].id) {
          k=j+12
          if (j === 0 || k%12 === 0 ) { variacaoM.push(0.00)
            console.log(variacaoM)
            console.log(ordenado) }
          else {
            variacaoM.push((((ordenado[j].value)*100)/ ordenado[j - 1].value) - 100)
          }
        }
       // console.log(variacaoM[j] + "   " + variacaoM.length)
      }
    }
  }

  rendTotal()
  console.log(variacaoM)
let x = -1
 

 
  // 
  // eslint-disable-next-line no-unused-expressions
  return (
    <>
      {data.investments.map((e, i) => {
        return (<div key={e.id} ><h2>{e.description}</h2><h2> Variação Total: {variacaoT[i]}%</h2><div>{ordenado.map((e1) => {
          if (e1.investmentId === e.id) {x++
            return (<lu className='conteiner'><li key={e1.id} className='valor'>{e1.month}/{e1.year}</li><li key={e1.id} className='valor' >R$ {e1.value.toFixed(2).replace(/\./g, ",")}</li><li className='valor'>{variacaoM[x].toFixed(2).replace(/\./g, ",")}%</li></lu>)
          }
        })}</div></div>
        )
      })}
    </>
  )
}

//<li className='valor'>Variação:{variacaoM[j].toFixed(2).replace(/\./g, ",")}%</li>