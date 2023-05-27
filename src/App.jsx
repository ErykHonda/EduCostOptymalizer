import React, { useState } from 'react';
import './App.css';
import Section, { InputValueN, InputValueRE } from './components/Section';
import PodsumowanieComp from './components/PodsumowanieComp';
import BlankMain from './components/BlankMain';
import HowItWork from './components/HowItWork';
import FooterComponent from './components/FooterComponent';
import SettingComponent from './components/SettingComponent';
import HomePageComponent from './components/HomePageComponent';



function App() {

  const [sekcje, setSekcje] = useState([]);
  const [podsumowanieZ, setPodsumowanieZ] = useState([]);
  const [strona, setStrona] = useState(10)

  function dodajSection() {
    const numer = sekcje.length;
    setSekcje([...sekcje, numer])
    RemovePodsumowanie()
    if (sekcje.length === 0) {
      if (InputValueN.length >= 1) InputValueN.length -= InputValueN.length;
      if (InputValueRE.length >= 1) InputValueRE.length -= InputValueRE.length;
    }

  }
  function usunSection() {
    const noweSection = [...sekcje];
    noweSection.pop();
    setSekcje(noweSection)
    RemovePodsumowanie()
    if (InputValueN.length >= 1) InputValueN.length -= 1;
    if (InputValueRE.length >= 1) InputValueRE.length -= 1
  }
  function resetSection() {
    setSekcje([])
    RemovePodsumowanie()
    if (InputValueN.length >= 1) InputValueN.length -= InputValueN.length;
    if (InputValueRE.length >= 1) InputValueRE.length -= InputValueN.length;
  }
  function AddPodsumowanie() {
    if (InputValueN.length !== 0 && InputValueN.length === InputValueRE.length && InputValueN.length === sekcje.length) {
      setSekcje([])
      setPodsumowanieZ([0])
    } else {

    }
  }
  function RemovePodsumowanie() {
    setPodsumowanieZ([])


  }
  function Main1() {
    return (
      <main className='main1'>
        <div className="button-box">
          <div className="xddd">
            <button class="button b1 type1" onClick={dodajSection}>
              <span class="btn-txt">Dodaj</span>
            </button>
            <button class="button b2 type2" onClick={usunSection}>
              <span class="btn-txt">Usuń</span>
            </button>
            <button class="button b3 type3" onClick={resetSection}>
              <span class="btn-txt">Resetuj</span>
            </button>
          </div>
          {sekcje.length !== 0 && <div className='Span-Box-Button'>Obecnie Dodano {sekcje.length} elementów</div>}
        </div>
        <div className='Main-Section-Box'>
          {sekcje.length > 0 && <div className="element">
            <div className="lista-element">
              {sekcje.map((sekcja, idx) => (
                <Section key={idx} prost={sekcja} />
              ))}
              {podsumowanieZ.map((e, idx) => (
                <PodsumowanieComp key={idx} />
              ))}
            </div>
          </div>}
        </div>
        {
          sekcje.length === 0 &&
          podsumowanieZ.length === 0 &&
          <BlankMain />
        }
        {sekcje.length !== 0 &&
          <div className="button-box-down">
            {/* <button onClick={AddPodsumowanie}>PrintPodsumowanie</button>arrow function */}
            <button class="printbtn" onClick={AddPodsumowanie}>
              Wyświetl Podsumowanie
            </button>
          </div>
        }
      </main>
    )
  }

  return (
    <div className="App" id='darktheme'>
      <header>
        <div class="radio-input">
          <label>
            <input type="radio" id="value-1" name="value-radio" value="value-1" onClick={() => setStrona(0)} />
            <span>Ustawnienia</span>
          </label>
          <label>
            <input type="radio" id="value-2" name="value-radio" value="value-2" onClick={() => setStrona(1)} />
            <span>Kalkulator</span>
          </label>
          <label>
            <input type="radio" id="value-3" name="value-radio" value="value-3" onClick={() => setStrona(2)} />
            <span>Instukcja</span>
          </label>
          <span class="selection"></span>
        </div>
      </header>
      {strona === 10 ? <HomePageComponent /> :
        strona === 0 ? <SettingComponent /> :
          strona === 1 ? <Main1 /> :
            <HowItWork />}

      <FooterComponent />
    </div>
  );

}

export default App;