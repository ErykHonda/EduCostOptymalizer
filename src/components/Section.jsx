import React from 'react'
import { RodzajPrzedmiotu, WSFuser, listaNauczycieli, randomevent } from '../assets/assets.jsx'


export const InputValueN = []
export const InputValueRE = []
export const InputValueWSF = []

function saveValueN(Event) {
    if (Event.target.value !== '0') {
        const nr = Event.target.name;
        InputValueN[nr] = Event.target.value;
    }
}

function saveValueRE(Event) {
    if (Event.target.value !== '0') {
        const nr = Event.target.name;
        InputValueRE[nr] = Event.target.value;
    }
}

function saveValueWSF(Event) {
    if (Event.target.value !== '0') {
        const nr = Event.target.name;
        InputValueWSF[nr] = Event.target.value;
    }
}
function Section({ prost }) {


    return (

        <div className="element1">
            <section>
                <select name={prost} onChange={saveValueN} defaultValue={InputValueN[prost]} className='NIP select' >

                    {listaNauczycieli.map((e, inx) => (
                        <option key={inx} value={inx}>{e[0]} {e[1]} -&gt; {e[2][0]} / {RodzajPrzedmiotu[e[2][1]]}</option>
                    ))
                    }
                </select>
                <select name={prost} onChange={saveValueRE} defaultValue={InputValueRE[prost]} className='RE select'>
                    {randomevent.map((e, inx) => (
                        <option key={inx} value={inx}>{e[0]} / {e[1]} pk.</option>
                    ))
                    }
                </select>
            </section>
            <section>
                <select name={prost} onChange={saveValueWSF} defaultValue={InputValueWSF[prost]} className='WSF select'>
                    {WSFuser.map((e, inx) => (
                        <option key={inx} value={inx}>{e[0]} / {e[1]} pk.</option>
                    ))
                    }
                </select>
            </section>
        </div>
    )
}

export default Section