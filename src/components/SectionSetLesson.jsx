import React from 'react'
import { RodzajPrzedmiotu } from '../assets/assets';


function SectionSetLesson(param) {
  const { Imie, Nazwisko, Przedmiot, Rodzaj,dane,indexs, setChanges } = param;

  function zapisanieDanych(Event) {
    switch (Event.target.name) {
      case 'Imie':
        {
          dane[indexs][0] = Event.target.value;
          console.log(dane[indexs][0])
          break;
        }
      case 'Nazwisko':
        {
          dane[indexs][1] = Event.target.value;
          break;
        }
      case 'Przedmiot':
        {
          dane[indexs][2] = Event.target.value;
          break;
        }
      case 'Rodzaj':
        {
          dane[indexs][3] = parseInt(Event.target.value)
          break;
        }
      default:
        {
        }
    }
    setChanges(true)
  }

  return (
    <div className="element1 XDDD">
      <input type="text" name="Imie" id="Imie" placeholder='Imie Nauczyciela' className='select inputsLesson' defaultValue={Imie} onChange={zapisanieDanych} />
      <input type="text" name="Nazwisko" id="Nazwisko" placeholder='Nazwisko Nauczyciela' className='select inputsLesson' defaultValue={Nazwisko} onChange={zapisanieDanych} />
      <input type="text" name="Przedmiot" id="Przedmiot" placeholder='Przedmiot' className='select inputsLesson' defaultValue={Przedmiot} onChange={zapisanieDanych} />
      <select name="Rodzaj" id="Rodzaj" placeholder='Rodzaj Przedmiotu' className='select inputsLesson' defaultValue={Rodzaj} onChange={zapisanieDanych}>
        {RodzajPrzedmiotu.map((e, inx) => (
          inx !== 0 && <option key={inx} value={inx}>{e}</option>
        ))}
      </select>
    </div>
  )
}

export default SectionSetLesson