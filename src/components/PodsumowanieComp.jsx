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
    console.log(SPNRE)
  }


  let LiczbaProcentWejscia = 90;
  switch (InputValueN.length) {
    case 1:
      {
        LiczbaProcentWejscia = 15;
        break;
      }
    case 2:
      {
        LiczbaProcentWejscia = 25;
        break;
      }
    case 3:
      {
        LiczbaProcentWejscia = 30;
        break;
      }
    case 4:
      {
        LiczbaProcentWejscia = 35;
        break;
      }
    case 5:
      {
        LiczbaProcentWejscia = 50;
        break;
      }
    default:
      {
        LiczbaProcentWejscia = 95;
      }
  }

  let odp = Math.floor((SPNRE) / (InputValueN.length) * LiczbaProcentWejscia);

  if (odp > 100) odp = 100;
  let idzDoDarinia = null;
  if (odp < 40) {
    for (let i = 0; i < InputValueN.length; i++) {
      if (listaNauczycieli[InputValueN[i]][2][0] === "Pm4" || listaNauczycieli[InputValueN[i]][2][0] === "Pm5" || listaNauczycieli[InputValueN[i]][2][0] === "Pm6") {
        if (randomevent[InputValueRE[i]][0] !== 'Odwołana/Zastępstow') idzDoDarinia = "Nie Ważne Co Idz Na Lekcje Pana Dariusza Rudzkiego";
      }
    }
  }


  return (
    <div className='element' >
      <h1>Opłaca Się Przyjść Na {odp}%</h1>
      <h4>{idzDoDarinia}</h4>
    </div>
  )
}
export default PodsumowanieComp