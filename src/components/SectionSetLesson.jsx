import React from 'react'

function SectionSetLesson(param) {
  const {Imie, Nazwisko, Przedmiot, Rodzaj} = param;
  return (
    <div className="element1 XDDD">
      <input type="text" name="Imie" id="Imie" placeholder='Imie Nauczyciela' className='select inputsLesson' defaultValue={Imie}/>
      <input type="text" name="Nazwisko" id="Nazwisko" placeholder='Nazwisko Nauczyciela' className='select inputsLesson' defaultValue={Nazwisko}/>
      <input type="text" name="Przedmiot" id="Przedmiot" placeholder='Przedmiot' className='select inputsLesson' defaultValue={Przedmiot}/>
      <input type="text" name="Rodzaj" id="Rodzaj" placeholder='Rodzaj Przedmiotu' className='select inputsLesson' defaultValue={Rodzaj} />
    </div>
  )
}

export default SectionSetLesson