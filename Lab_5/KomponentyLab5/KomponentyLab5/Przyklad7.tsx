import React, { useState } from 'react';

/*
Przykład tzw. kontrolowanego inputa
Wartość cały czas pochodzi ze stanu (value={tekst})
natomiast gdy tylko wychwytujemy zmiane, aktualizujemy stan
dzieki czemu w stanie cały czas mamy najświeższą inforamację o wartości inputa
*/

const Przyklad7 = () => {
    const [tekst, setTekst] = useState("aaa")

    return (
        <div>
            Tekst z inputa: <b>{tekst}</b>
            <br /><br />
            <input type="text" value={tekst} onChange={(e) => {
                setTekst(e.target.value)
            }}/>
            <input type="text" value={tekst} onChange={(e) => {
                setTekst(e.target.value)
            }}/>
        </div>
    );
};

export default Przyklad7;