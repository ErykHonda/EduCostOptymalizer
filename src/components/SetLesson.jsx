import React, { useEffect, useState } from 'react'
import SectionSetLesson from './SectionSetLesson'

function SetLesson(props) {
    const { AktualnaStrona} = props;
    const [dane,setDane] = useState([])
    // const pobraneDane = JSON.parse(storedArray)
    // const poprawneDane = [[]];
    // pobraneDane.map((e, inx) => (
    //   poprawneDane[inx] = [e[0],e[1],e[2],e[3]]
    // ))
      
    useEffect(()=>{
      const storedArray1= localStorage.getItem('ListaNauczycieliIPrzedmiotow')
      if(storedArray1)
      {
        const pobraneDane1 = JSON.parse(storedArray1)
        setDane(pobraneDane1)
      }
    },[ ])

  function dodajDane() {
    const nowyElement = [...dane,['','','',1]]
    setDane(nowyElement)
  }

  function usunDane() {
    const noweDane = [...dane];
    noweDane.pop();
    setDane(noweDane)
  }

  function zapiszDane()
  {
    // liczenie pola 1
    let pP = 0
    for(let i = 0 ; i<dane.length;i++)
    {
      if(dane[i][0]!=='') pP++;
      // console.log(dane[i][0])
    }
    console.log(pP)

    // liczenie pola 2
    let pD = 0
    for(let i = 0 ; i<dane.length;i++)
    {
      if(dane[i][0]!=='') pD++;
    }
    console.log(pD)
    let pT = 0
    for(let i = 0 ; i<dane.length;i++)
    {
      if(dane[i][2]!=='') pT++;
    }
    console.log(pT)
    let pC = 1
    for(let i = 0 ; i<dane.length;i++)
    {
      if(dane[i][3]!==0) pC++;
    }
    console.log(pC)
    if(pP!==0 && pP===pD && pP===pT && pP===pC && pP===dane.length)
    {
      localStorage.setItem('ListaNauczycieliIPrzedmiotow', JSON.stringify(dane))
      console.warn("Zapisano");
    }else console.warn("Nie Zapisano");

  }
  

  return (
    <main className='main1'>
        <div className="button-box">
            <button className="button b3 type3" onClick={() => AktualnaStrona(0)}>
              <span className="btn-txt">Powrót</span>
            </button>
            <button className="button b1 type1" onClick={() => dodajDane()}>
              <span className="btn-txt">Dodaj</span>
            </button>
            <button className="button b2 type2" onClick={() => usunDane()}>
              <span className="btn-txt">Usuń</span>
            </button>
        </div>
      <div className="element" id="Aside">


        <div className='Main-Section-Box'>
          <div className="lista-element">
            {dane.map((e, inx) => (
              inx !== 0 && <SectionSetLesson key={inx} Imie={e[0]} Nazwisko={e[1]} Przedmiot={e[2]} Rodzaj={e[3]} dane={dane} indexs={inx}/>
            ))}
          </div>
        </div>
      </div>
      <div className="button-box-down">
            <button className="printbtn" onClick={()=>zapiszDane()}>
              Zapisz Zmiany
            </button>
          </div>
    </main>
  )
}

export default SetLesson