import React, { useEffect, useState } from 'react'
import { RodzajPrzedmiotu, WSFuser, randomevent } from '../assets/assets.jsx'
import { InputValueN, InputValueRE, InputValueWSF } from './Section';

const storedArray = localStorage.getItem('ListaNauczycieliIPrzedmiotow')

function PodsumowanieComp() {
  const pOGKS = [];
  const pM = [];
  const pZ = [];
  const pI = [];
  const sumaPK = [0, 0, 0, 0];
  const sumaPKS = [0, 0, 0, 0];
  const [poprawneDane,setPoprawneDane] = useState([]);

    useEffect(()=>{
    const storedArray1= localStorage.getItem('ListaNauczycieliIPrzedmiotow')
    if(storedArray1)
    {
      const pobraneDane1 = JSON.parse(storedArray1)
      setPoprawneDane(pobraneDane1)
    }
  },[ ])

  const pobraneDane = JSON.parse(storedArray)
  pobraneDane.map((e, inx) => (
    poprawneDane[inx] = [e[0], e[1], e[2], e[3]]
  ))

  //zliczanie ogólno kształcących
  for (let i = 0; i < InputValueN.length; i++) {
    if (poprawneDane[InputValueN[i]][3] === 1) {
      pOGKS[pOGKS.length] = [poprawneDane[InputValueN[i]][2], randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1], randomevent[InputValueRE[i]][0]];
      sumaPK[0] += randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1];
      sumaPKS[0] += WSFuser[InputValueWSF[i]][1];
    }
  }

  //dla Maturalnych
  for (let i = 0; i < InputValueN.length; i++) {
    if (poprawneDane[InputValueN[i]][3] === 3) {
      pM[pM.length] = [poprawneDane[InputValueN[i]][2], randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1], randomevent[InputValueRE[i]][0]];
      sumaPK[1] += randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1];
      sumaPKS[1] += WSFuser[InputValueWSF[i]][1];

    }
  }

  //dla Zawodowych
  for (let i = 0; i < InputValueN.length; i++) {
    if (poprawneDane[InputValueN[i]][3] === 2) {
      pZ[pZ.length] = [poprawneDane[InputValueN[i]][2], randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1], randomevent[InputValueRE[i]][0]];
      sumaPK[2] += randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1];
      sumaPKS[2] += WSFuser[InputValueWSF[i]][1];

    }
  }

  //dla innych

  for (let i = 0; i < InputValueN.length; i++) {
    if (poprawneDane[InputValueN[i]][3] === 4) {
      pI[pI.length] = [poprawneDane[InputValueN[i]][2], randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1], randomevent[InputValueRE[i]][0]];
      sumaPK[3] += randomevent[InputValueRE[i]][1] * WSFuser[InputValueWSF[i]][1];
      sumaPKS[3] += WSFuser[InputValueWSF[i]][1];

    }
  }

  function gPFEle(arg) {
    return Math.round((sumaPK[arg]) / (sumaPKS[arg]) * 100)
  }

  const podsumowano = Math.round((sumaPK[0] + sumaPK[1] + sumaPK[2] + sumaPK[3]) / (sumaPKS[0] + sumaPKS[1] + sumaPKS[2] + sumaPKS[3]) * 100)

  return (
    <div className='element2 podsumowanieEle' >
      <section className='PodsumowanieElement Wfull'>
        <h1 id={podsumowano > 60 ? "GreenInf1" : podsumowano > 40 ? "YellowInf" : "RedInf"} className='SRW'>Średnia Wyników</h1>
        <table className='tabela'>
          <tbody>
            <tr className='napk'><th colSpan={2}>Zdobyte punkty / Przewidywany liczba punktów / %</th></tr>
            <tr className='napk' id={podsumowano > 60 ? "GreenInf" : podsumowano > 40 ? "YellowInf" : "RedInf"}><td colSpan={2}>{sumaPK[0] + sumaPK[1] + sumaPK[2] + sumaPK[3]} pk. / {sumaPKS[0] + sumaPKS[1] + sumaPKS[2] + sumaPKS[3]} pk. / {Math.round((sumaPK[0] + sumaPK[1] + sumaPK[2] + sumaPK[3]) / (sumaPKS[0] + sumaPKS[1] + sumaPKS[2] + sumaPKS[3]) * 100)}%</td></tr>
            <tr className='przedmiotrow'><th>Kategoria</th><th>Liczba punktów</th></tr>
            <tr className='przedmiotrow'><td>{RodzajPrzedmiotu[1]}</td><td>{sumaPK[0]}</td></tr>
            <tr className='przedmiotrow'><td>{RodzajPrzedmiotu[3]}</td><td>{sumaPK[1]}</td></tr>
            <tr className='przedmiotrow'><td>{RodzajPrzedmiotu[2]}</td><td>{sumaPK[2]}</td></tr>
            <tr className='przedmiotrow'><td>{RodzajPrzedmiotu[4]}</td><td>{sumaPK[3]}</td></tr>
          </tbody>
        </table>
      </section><br className='brwitmobile'></br>
      <section className='PodsumowanieElement'>
        <h1>Przedmioty {RodzajPrzedmiotu[1]}</h1>
        {pOGKS.length !== 0 ? <table className='tabela'>
          <tbody>
            <tr className='napk'><th colSpan={3}>Zdobyte punkty / Przewidywany liczba punktów</th></tr>
            <tr className='napk'><td colSpan={3} id={gPFEle(0) > 60 ? "GreenInf" : gPFEle(0) > 40 ? "YellowInf" : "RedInf"}>{sumaPK[0]} pk. / {sumaPKS[0]} pk.</td></tr>
            <tr><th>Przedmiot</th><th>Liczba punktów</th><th>Co Będzie Na Lekcji</th></tr>
            {pOGKS.map((e, inx) => (
              <tr key={inx} className='przedmiotrow'><td>{e[0]}</td><td>{e[1]}</td><td>{e[2]}</td></tr>
            ))}
          </tbody>
        </table> : <p>Brak Danych Do Wyświetlenia</p>}
      </section>
      <section className='PodsumowanieElement'>
        <h1>Przedmioty {RodzajPrzedmiotu[3]}</h1>
        {pM.length !== 0 ? <table className='tabela'>
          <tbody>
            <tr className='napk'><th colSpan={3}>Zdobyte punktów. / Przewidywany liczba punktów.</th></tr>
            <tr className='napk'><td colSpan={3} id={gPFEle(1) > 60 ? "GreenInf" : gPFEle(1) > 40 ? "YellowInf" : "RedInf"}>{sumaPK[1]} pk. / {sumaPKS[1]} pk.</td></tr>
            <tr><th>Przedmiot</th><th>Liczba punktów</th><th>Co Będzie Na Lekcji</th></tr>
            {pM.map((e, inx) => (
              <tr key={inx} className='przedmiotrow'><td>{e[0]}</td><td>{e[1]}</td><td>{e[2]}</td></tr>
            ))}
          </tbody>
        </table> : <p>Brak Danych Do Wyświetlenia</p>}
      </section>
      <section className='PodsumowanieElement'>
        <h1>Przedmioty {RodzajPrzedmiotu[2]}</h1>

        {pZ.length !== 0 ? <table className='tabela'>
          <tbody>
            <tr className='napk'><th colSpan={3}>Zdobyte punkty / Przewidywany liczba punktów</th></tr>
            <tr className='napk'><td colSpan={3} id={gPFEle(2) > 60 ? "GreenInf" : gPFEle(2) > 40 ? "YellowInf" : "RedInf"}>{sumaPK[2]} pk. / {sumaPKS[2]} pk.</td></tr>

            <tr><th>Przedmiot</th><th>Liczba punktów</th><th>Co Będzie Na Lekcji</th></tr>
            {pZ.map((e, inx) => (
              <tr key={inx} className='przedmiotrow'><td>{e[0]}</td><td>{e[1]}</td><td>{e[2]}</td></tr>
            ))}
          </tbody>
        </table> : <p>Brak Danych Do Wyświetlenia</p>}
      </section>
      <section className='PodsumowanieElement'>
        <h1>{RodzajPrzedmiotu[4]} Przedmioty</h1>
        {pI.length !== 0 ? <table className='tabela'>
          <tbody>
            <tr className='napk'><th colSpan={3}>Zdobyte punkty / Przewidywany liczba punktów</th></tr>
            <tr className='napk'><td colSpan={3} id={gPFEle(3) > 60 ? "GreenInf" : gPFEle(3) > 40 ? "YellowInf" : "RedInf"}>{sumaPK[3]} pk. / {sumaPKS[3]} pk.</td></tr>
            <tr><th>Przedmiot</th><th>Liczba punktów</th><th>Co Będzie Na Lekcji</th></tr>
            {pI.map((e, inx) => (
              <tr key={inx} className='przedmiotrow'><td>{e[0]}</td><td>{e[1]}</td><td>{e[2]}</td></tr>
            ))}
          </tbody>
        </table> : <p>Brak Danych Do Wyświetlenia</p>}
      </section>

    </div>
  )
}
export default PodsumowanieComp