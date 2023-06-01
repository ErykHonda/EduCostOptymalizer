import React from 'react'
import SectionSetLesson from './SectionSetLesson'

function SetLesson(props) {
    const { AktualnaStrona, sekcjaSL ,setSekcjaSL} = props;
  function dodajSection() {
    const numer = sekcjaSL.length;
    setSekcjaSL([...sekcjaSL, numer])
    if (sekcjaSL.length === 0) {
    }

  }
  function usunSection() {
    const noweSection = [...sekcjaSL];
    noweSection.pop();
    setSekcjaSL(noweSection)
  }
  return (
    <main className='MainAside'>
      <div className="element" id="Aside">

        <div className="button-box">
          <div className="xddd">
            <button className="button b3 type3" onClick={() => AktualnaStrona(0)}>
              <span className="btn-txt">Powrót</span>
            </button>
            <button className="button b1 type1" onClick={() => dodajSection()}>
              <span className="btn-txt">Dodaj</span>
            </button>
            <button className="button b2 type2" onClick={() => usunSection()}>
              <span className="btn-txt">Usuń</span>
            </button>
          </div>
        </div>

        <div className='Main-Section-Box'>
          <div className="lista-element">
            {sekcjaSL.map((e, inx) => (
              <SectionSetLesson key={inx} />
            ))}
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default SetLesson