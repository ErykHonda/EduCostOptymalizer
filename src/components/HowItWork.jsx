import React from 'react'

function HowItWork() {
  return (
    <main className='MainAside'>
      <div className="element" id='Aside'>
        <h1 className='Iiobs'>Instrukcja Obsługi</h1>
        <div className="Iobs">
        <ol>
          <li>Wejdz w "Kalkulator"</li>
          <li>Klikajac przycisk <span className='green'>"Dodaj"</span> dodajesz pole które <span className='uwaga'>MUSISZ UZUPEŁNIĆ</span></li>
          <li>Po wypełnieniu wszystkich potrzebnych pól nalerzy nacisnąć <span className='pomarancz'>pomarańczowy</span> przycisk </li>
          <li>Po naciśnięciu wyświetli się panel z wyliczeniem</li>
          <li>Aby kontynuować kalkulowanie należy ponownie nacisnąć przycisk <span className='green'>"Dodaj"</span></li>
        </ol>
        </div>

      </div>
    </main>
  )
}

export default HowItWork