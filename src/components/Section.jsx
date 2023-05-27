import React from 'react'
import { listaNauczycieli, randomevent } from '../assets/assets.jsx'


export const InputValueN = []
export const InputValueRE = []


// function saveValueP(Event)
// {
//     const nr = Event.target.name;
//     // console.log(InputValueP[nr]);
//     InputValueP[nr] = Event.target.value;
//     console.log(nr)
//     console.log(InputValueP[nr]);
// }

function saveValueN(Event) {
    const nr = Event.target.name;
    // console.log(InputValueP[nr]);
    InputValueN[nr] = Event.target.value;

    console.log(nr)
    console.log(InputValueN[nr]);
}

function saveValueRE(Event) {
    const nr = Event.target.name;
    // console.log(InputValueP[nr]);
    InputValueRE[nr] = Event.target.value;
    console.log(nr)
    console.log(InputValueRE[nr]);

}
// let count=0
function Section({ prost }) {

    // const [ ,render] = useState()//odświerzacz

    return (

        <div className="element1">
            {/* <select name={prost} onChange={saveValueP}  defaultValue={0}>
                {listaPrzedmiotow.map((e,inx)=>(
                    
                    <option key={inx} value={inx}>{e[0]}</option>//inx do zamiany na wartosci lekcji
                ))
                }
            </select> */}
            <select name={prost} onChange={saveValueN} defaultValue={InputValueN[prost]} className='NIP-select' >

                {listaNauczycieli.map((e, inx) => (
                    <option key={inx} value={inx}>{e[0]} {e[1]} -&gt; {e[2][0]}</option>//inx do zamiany na wartosci lekcji
                ))
                }
            </select>
            <select name={prost} onChange={saveValueRE} defaultValue={InputValueRE[prost]} className='RE-select'>
                {randomevent.map((e, inx) => (
                    <option key={inx} value={inx}>{e[0]}</option>//inx do zamiany na wartosci lekcji
                ))
                }
            </select>
        </div>
    )
}

export default Section