import React from 'react'
import { listaNauczycieli, randomevent } from '../assets/assets.jsx'
import { InputValueN, InputValueRE } from './Section';


function PodsumowanieComp() {

  let SP = 0
  let SN = 0
  let SRE = 0
  let SPNRE = 0
  for (let i = 0; i < InputValueN.length; i++) {
    SP = listaNauczycieli[InputValueN[i]][2][1]
    SN = listaNauczycieli[InputValueN[i]][3]
    SRE = randomevent[InputValueRE[i]][1]
    SPNRE += SP * SN * SRE;
  }


  let LiczbaProcentWejscia;
  switch (InputValueN.length) {
    case 1:
      {
        LiczbaProcentWejscia = 20;
        break;
      }
    case 2:
      {
        LiczbaProcentWejscia = 30;
        break;
      }
    case 3:
      {
        LiczbaProcentWejscia = 50;
        break;
      }
    default:
      {
        LiczbaProcentWejscia = 80;
        break;
      }
  }

  let odp = Math.floor(((SPNRE) / ((InputValueN.length * 100) / LiczbaProcentWejscia)) * 100)

  if (odp > 200) odp = 200;
  let idzDoDarinia = null;
  if (odp < 40) {
    for (let i = 0; i < InputValueN.length; i++) {
      if (listaNauczycieli[InputValueN[i]][2][0] === "Pm4, Pm5, Pm6") {
        idzDoDarinia = "Nie Ważne Co Idz Na Lekcje Pana Dariusza Rudzkiego";
      }
    }
  }




  return (
    <div className='element' >
      opłaca się przyjść na {odp}%
      <p>{idzDoDarinia}</p>
    </div>
  )
}
export default PodsumowanieComp