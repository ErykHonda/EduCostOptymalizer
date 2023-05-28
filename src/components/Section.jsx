import React from 'react'
import { listaNauczycieli, randomevent } from '../assets/assets.jsx'


export const InputValueN = []
export const InputValueRE = []


function saveValueN(Event) {
    const nr = Event.target.name;
    InputValueN[nr] = Event.target.value;
}

function saveValueRE(Event) {
    const nr = Event.target.name;
    InputValueRE[nr] = Event.target.value;

}
function Section({ prost }) {


    return (

        <div className="element1">
            <select name={prost} onChange={saveValueN} defaultValue={InputValueN[prost]} className='NIP-select' >

                {listaNauczycieli.map((e, inx) => (
                    <option key={inx} value={inx}>{e[0]} {e[1]} -&gt; {e[2][0]}</option>
                ))
                }
            </select>
            <select name={prost} onChange={saveValueRE} defaultValue={InputValueRE[prost]} className='RE-select'>
                {randomevent.map((e, inx) => (
                    <option key={inx} value={inx}>{e[0]}</option>
                ))
                }
            </select>
        </div>
    )
}

export default Section