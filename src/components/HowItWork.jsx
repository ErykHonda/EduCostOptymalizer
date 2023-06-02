import React from 'react'
import InstrukcjaPDF from '../assets/Instrukcja.pdf'
function HowItWork(props) {
  const {setStrona} = props;
  return (
    <main className='MainAside'>
      <div className="element" id='Aside'>
        <h1 className='Iiobs'>Instrukcja Obsługi</h1>
        <section className='ButtonToHowItWork'>
          <a href={InstrukcjaPDF} download='Instrukcja'>
            <section className='DownloadButtonHowItWork LeftButton'>
              <button className="button1">
                <span className="button1-content">Pobierz Instrukcję</span>
              </button>
            </section>
          </a>
          <a href={InstrukcjaPDF} target="_blank" rel="noopener noreferrer">
            <section className='DownloadButtonHowItWork RightButton'>
              <button className="button1">
                <span className="button1-content">Otwórz Instrukcję W Karcie</span>
              </button>
            </section>
          </a>
        </section>
        <div className="Iobs">
          {/* <ol>
          <li>Wejdz w <strong className="darkGreen" onClick={()=>setStrona(1)}>"Kalkulator"</strong></li>
          <li>Klikajac przycisk <span className='green'><strong className='green'>"Dodaj"</strong></span> dodajesz pole które <span className='uwaga'>MUSISZ UZUPEŁNIĆ</span></li>
          <li>Po wypełnieniu wszystkich potrzebnych pól nalerzy nacisnąć <span className='pomarancz'>pomarańczowy</span> przycisk </li>
          <li>Po naciśnięciu wyświetli się panel z wyliczeniem</li>
          <li>Aby kontynuować kalkulowanie należy ponownie nacisnąć przycisk <span className='green'><strong className='green'>"Dodaj"</strong></span></li>
        </ol> */}

          <ol>
            <li>Po wejściu na stronę, znajdź zakładkę <strong className="darkGreen" onClick={()=>setStrona(1)}>"Kalkulator"</strong> i kliknij na nią.</li>
            <li>Po otwarciu zakładki <strong className="darkGreen" onClick={()=>setStrona(1)}>"Kalkulator"</strong> zobaczysz trzy przyciski: <strong className='green'>"Dodaj"</strong>, <strong className='red'>"Usuń"</strong> i <strong className='blue'>"Resetuj"</strong>.</li>
            <li>Kliknij przycisk <strong className='green'>"Dodaj"</strong>, aby dodać element do listy uzupełnienia.</li>
            <li>Po kliknięciu przycisku <strong className='green'>"Dodaj"</strong> pojawią się trzy pola wyboru, które musisz wypełnić.</li>
            <li>Uzupełnij wymagane dane w polach wyboru dla danego elementu.</li>
            <li> Jeśli chcesz usunąć ostatnio dodany element, kliknij przycisk <strong className='red'>"Usuń"</strong>. To spowoduje usunięcie ostatniego elementu z listy.</li>
            <li>Jeśli chcesz zresetować stronę do stanu początkowego, kliknij przycisk <strong className='blue'>"Resetuj"</strong>. Spowoduje to usunięcie wszystkich dodanych elementów i przywrócenie strony do stanu początkowego.</li>
            <li>Możesz dodawać, usuwać i resetować elementy według potrzeb.</li>
            <li>Gdy jesteś gotowy do wyświetlenia podsumowania, kliknij przycisk <strong className='orange'>"Wyświetl Podsumowanie"</strong>.</li>
            <p>Pamiętaj, aby upewnić się, że wszystkie wymagane pola wyboru są uzupełnione przed dodaniem elementu. Możesz również usuwać i resetować elementy w dowolnym momencie. Klikając przycisk <strong className='orange'>"Wyświetl Podsumowanie"</strong> zostaniesz przeniesiony do ekranu zawierającego podsumowanie na podstawie dodanych elementów.</p>
            <p>Postępuj zgodnie z powyższymi krokami, aby korzystać z funkcjonalności zakładki <strong className="darkGreen" onClick={()=>setStrona(1)}>"Kalkulator"</strong> i uzyskać podsumowanie na podstawie dodanych elementów.</p>
          </ol>
        </div>

      </div>
    </main>
  )
}

export default HowItWork