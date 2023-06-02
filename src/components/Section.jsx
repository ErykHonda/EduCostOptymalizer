import React from 'react'
import { RodzajPrzedmiotu, WSFuser, randomevent } from '../assets/assets.jsx'


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

    const tablicaDanych = JSON.parse(localStorage.getItem('ListaNauczycieliIPrzedmiotow'))

    return (

        <div className="element1">
            <section>
                <select name={prost} onChange={saveValueN} defaultValue={InputValueN[prost]} className='NIP select' >

                    {tablicaDanych.map((e, inx) => (
                        InputValueN[prost] ===undefined ? <option key={inx} value={inx}>{e[0]} {e[1]} -&gt; {e[2]} / {RodzajPrzedmiotu[e[3]]}</option>
                        : inx !==0 && <option key={inx} value={inx}>{e[0]} {e[1]} -&gt; {e[2]} / {RodzajPrzedmiotu[e[3]]}</option>
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