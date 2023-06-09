import React, { useRef, useState } from 'react';
import './App.css';
// import exportexperimental from './assets/exportexpermiental.txt'

import Section, { InputValueN, InputValueRE, InputValueWSF } from './components/Section';
import PodsumowanieComp from './components/PodsumowanieComp';
import BlankMain from './components/BlankMain';
import HowItWork from './components/HowItWork';
import FooterComponent from './components/FooterComponent';
import HomePageComponent from './components/HomePageComponent';
import { useCookies } from 'react-cookie';
import SetLesson from './components/SetLesson';
import { listaNauczycieli } from './assets/assets';
import { saveAs } from 'file-saver';
import { Alert, AlertDescription, AlertIcon, AlertTitle, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion'

function App() {

  const [strona, setStrona] = useState(10);
  const [sekcje, setSekcje] = useState([]);
  const [podsumowanieZ, setPodsumowanieZ] = useState([]);
  const [podsumowanieError, setPodsumowanieError] = useState(null);
  const [cookies, setCookie] = useCookies(['CThemeName', 'CForAgre',]);

  if (!localStorage.getItem("ListaNauczycieliIPrzedmiotow")) {
    let newtable = [];
    for (var i = 0; i < listaNauczycieli.length; i++) {
      newtable[i] = [listaNauczycieli[i][0], listaNauczycieli[i][1], listaNauczycieli[i][2][0], listaNauczycieli[i][2][1]]
    }
    localStorage.setItem('ListaNauczycieliIPrzedmiotow', JSON.stringify(newtable))
    // console.warn(newtable)
    window.location.reload()
  }

  if (!cookies.CThemeName) {
    setCookie('CThemeName', 'darktheme', { path: '/' });
  }
  if (!cookies.CForAgre) {
    setCookie('CForAgre', false, { path: '/' });
  }
  // if(!localStorage.getItem('test'))
  // {
  //   localStorage.setItem('test',JSON.stringify(listaNauczycieli));
  // }


  function dodajSection() {
    const numer = sekcje.length;
    setSekcje([...sekcje, numer])
    RemovePodsumowanie()
    if (sekcje.length === 0) {
      if (InputValueN.length >= 1) InputValueN.length -= InputValueN.length;
      if (InputValueRE.length >= 1) InputValueRE.length -= InputValueRE.length;
      if (InputValueWSF.length >= 1) InputValueWSF.length -= InputValueWSF.length;
    }

  }
  function usunSection() {
    const noweSection = [...sekcje];
    noweSection.pop();
    setSekcje(noweSection)
    RemovePodsumowanie()
    if (InputValueN[sekcje.length - 1]) InputValueN.length -= 1;
    if (InputValueRE[sekcje.length - 1]) InputValueRE.length -= 1
    if (InputValueWSF[sekcje.length - 1]) InputValueWSF.length -= 1;
    setPodsumowanieError(null)

  }
  function resetSection() {
    setSekcje([])
    RemovePodsumowanie()
    if (InputValueN.length >= 1) InputValueN.length = 0;
    if (InputValueRE.length >= 1) InputValueRE.length = 0;
    if (InputValueWSF.length >= 1) InputValueWSF.length = 0;
    setPodsumowanieError(null)

  }

  function AddPodsumowanie() {
    let IVNnn = 0;
    let IVREnn = 0;
    let IVWSFnn = 0;

    for (let i = 0; i < InputValueN.length; i++) {
      if (InputValueN[i] !== undefined) IVNnn += 1;
    }

    for (let i = 0; i < InputValueRE.length; i++) {
      if (InputValueRE[i] !== undefined) IVREnn += 1;
    }

    for (let i = 0; i < InputValueWSF.length; i++) {
      if (InputValueWSF[i] !== undefined) IVWSFnn += 1;
    }

    if (IVNnn !== 0 && IVNnn === IVREnn && IVNnn === IVWSFnn && IVNnn === sekcje.length) {
      setSekcje([])
      setPodsumowanieZ([0])
      setPodsumowanieError(null)
    } else {
      setPodsumowanieError('Nie Podano Wszystkich Potrzebnych danych')
    }
  }
  function RemovePodsumowanie() {
    setPodsumowanieZ([])
  }
  function CookieAgre() {
    let checkboxstatus;
    const selectOption = (event) => {
      checkboxstatus = event.target.checked;
    };

    const setCookieAgre = () => {
      if (checkboxstatus === true) setCookie('CForAgre', true, { path: '/' });
      else setCookie('CForAgre', false, { path: '/' });
    };


    return (
      <div className="bgcookies">
        <div className="cookie-consent">
          <form>
            <label htmlFor="consent-checkbox" className='htmlforcheckbox'>
              Ta strona internetowa wykorzystuje pliki cookies w celu zapewnienia optymalnego działania serwisu oraz w celach statystycznych. Kontynuując korzystanie ze strony, wyrażasz zgodę na używanie plików cookies.
              Więcej informacji na ten temat znajdziesz w naszej polityce prywatności*
              <section>* Pliki Cookies są wykorzystywane do pzechowywania: Obecnego Motywu , Czy została zatwierdzona zgoda na ich wykorzystywanie</section>

            </label>
            <input type="checkbox" id="consent-checkbox" required onChange={selectOption} />
            <button type='submit' onClick={setCookieAgre}>Zapisz</button>
          </form>
        </div>
      </div>
    )
  }
  function Main1() {
    return (
      <main className='main1'>
        <div className="button-box">
          <div className="xddd">
            <button className="button b1 type1" onClick={dodajSection}>
              <span className="btn-txt">Dodaj</span>
            </button>
            <button className="button b2 type2" onClick={usunSection}>
              <span className="btn-txt">Usuń</span>
            </button>
            <button className="button b3 type3" onClick={resetSection}>
              <span className="btn-txt">Resetuj</span>
            </button>
          </div>
          {sekcje.length !== 0 && <div className='Span-Box-Button'>Obecnie Dodano {sekcje.length} elementów</div>}
          {podsumowanieError !== null && <div className='Span-Box-Button Red-box'>{podsumowanieError}</div>}
        </div>
        <div className='Main-Section-Box'>
          {sekcje.length > 0 && <div className="element">
            <div className="lista-element">
              {sekcje.map((sekcja, idx) => (
                <Section key={idx} prost={sekcja} />
              ))}
            </div>

          </div>}
          {podsumowanieZ.length !== 0 &&
            <div className='element'>
              {podsumowanieZ.map((e, idx) => (
                <PodsumowanieComp key={idx} />
              ))}
            </div>
          }
        </div>
        {
          sekcje.length === 0 &&
          podsumowanieZ.length === 0 &&
          <BlankMain />
        }
        {sekcje.length !== 0 &&
          <div className="button-box-down">
            <button className="printbtn" onClick={AddPodsumowanie}>
              Wyświetl Podsumowanie
            </button>
          </div>
        }
      </main>
    )
  }

  function SettingComponent() {
    const handleOptionChange = (event) => {
      setCookie('CThemeName', event.target.value, { path: '/' });
    };

    function saveToFile() {
      const data = localStorage.getItem('ListaNauczycieliIPrzedmiotow');
      const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'EduCostOptymalizerSettings.txt');
    }

    const fileInputRef = useRef(null);

    const AktywacjaPobierania = () => {
      fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
        przetwarzanieDanychPobranychZPliku(fileContent);
      };

      reader.readAsText(file);
    };

    const przetwarzanieDanychPobranychZPliku = (fileContent) => {
      try {
        if(Array.isArray(JSON.parse(fileContent)))
        if(Array.isArray(JSON.parse(fileContent)[0]))
        {
          let LenghtError = false
          for(let i = 0 ; i<JSON.parse(fileContent).length;i++)
          {
            if(JSON.parse(fileContent)[i].length!==4 && !isNaN(JSON.parse(fileContent)[i][3]))LenghtError=true
          }
          if(LenghtError===false)
          {
            localStorage.setItem("ListaNauczycieliIPrzedmiotow",fileContent)
            window.location.reload()
          }else {
            console.error("podano błędny zestaw danych")
          }
        }
        
      } catch (error) {
        setRodzajKomunikatu('error')
        setShowMessageValue(['Nie Wczytano Danych', 'Dane Podane W Pliku Nie Są poprawne Przez Co Nie Zostały Wczytane Do Użytku'])
        console.error('Błąd podczas parsowania danych:', error);
        showMessageSwich()
      }
    };
    const [showMessageValue, setShowMessageValue] = useState(['Nie Wczytano Danych', 'Dane Podane W Pliku Nie Są poprawne Przez Co Nie Zostały Wczytane Do Użytku'])
    const [rodzajKomunikatu, setRodzajKomunikatu] = useState('error')
    const [showMessage, setShowMessage] = useState(false)

    const showMessageSwich = () => {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 2500);
    }
    return (
      <main className='MainAside'>
        {showMessage &&
        <div className='komunkaciorSetLesson'>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
          >
            <ChakraProvider>
              <Alert status={rodzajKomunikatu} variant={"solid"}>
                <AlertIcon />
                <AlertTitle>{showMessageValue[0]}</AlertTitle>
                <AlertDescription>{showMessageValue[1]}</AlertDescription>
              </Alert>
            </ChakraProvider>
          </motion.div>
        </div>
      }
        <div className="element" id='Aside'>

          <div className="zmianaTrybu">
            <h3>Zmiana Motywu Strony</h3>
            <div className="wrapper">
              <div className="option">
                <input className="input" type="radio" name="btn" value="darktheme" checked={cookies.CThemeName === 'darktheme'} onChange={handleOptionChange} />
                <div className="btn">
                  <span className="span">Dark Theme Standard</span>
                </div>
              </div>
              <div className="option">
                <input className="input" type="radio" name="btn" value="lighttheme" checked={cookies.CThemeName === 'lighttheme'} onChange={handleOptionChange} />
                <div className="btn">
                  <span className="span">Light Theme</span>
                </div>  </div>
              <div className="option">
                <input className="input" type="radio" name="btn" value="firsttheme" checked={cookies.CThemeName === 'firsttheme'} onChange={handleOptionChange} />
                <div className="btn">
                  <span className="span">OG Theme</span>
                </div>
              </div>
            </div>
          </div>

          <div className="przyciskSLess">
            <button className="cssbuttons-io" onClick={() => setStrona(8)}>
              <span> Przejdz Do Ustawienia Lekcji </span>
            </button>
          </div>
          <br></br>
          <section className='ButtonToHowItWork'>
            <section className='DownloadButtonHowItWork LeftButton'>
              {/* <a href={exportexperimental} download='Ustawienia'> */}
              <button className="button1 left1" onClick={() => saveToFile()}>
                <span className="button1-content" >Exportuj "Ustawienia Do Lekcji" (Experimental)</span>
              </button>
              {/* </a> */}
            </section>
            <section className='DownloadButtonHowItWork RightButton'>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
              <button className="button1 right1" onClick={AktywacjaPobierania}>
                <span className="button1-content">Importuj "Ustawienia Do Lekcji" (Experimental)</span>
              </button>
            </section>
          </section>
        </div>
      </main>
    )
  }

  return (
    <div className="App" id={cookies.CThemeName}>
      {strona !== 8 &&
        <header>
          <div className="radio-input">
            <label>
              <input type="radio" id="value-1" name="value-radio" value="value-1" checked={strona === 0 || strona === 8} onChange={() => setStrona(0)} />
              <span>Ustawnienia</span>
            </label>
            <label>
              <input type="radio" id="value-2" name="value-radio" value="value-2" checked={strona === 1} onChange={() => setStrona(1)} />
              <span>Kalkulator</span>
            </label>
            <label>
              <input type="radio" id="value-3" name="value-radio" value="value-3" checked={strona === 2} onChange={() => setStrona(2)} />
              <span>Instukcja</span>
            </label>
            <span className="selection"></span>
          </div>
        </header>
      }
      {strona === 10 ? <HomePageComponent /> :
        strona === 0 ? <SettingComponent /> :
          strona === 1 ? <Main1 /> :
            strona === 8 ? <SetLesson AktualnaStrona={setStrona} /> :
              <HowItWork setStrona={setStrona} />}
      {cookies.CForAgre !== 'true' && <CookieAgre />}
      <FooterComponent />
    </div>
  );

}

export default App;