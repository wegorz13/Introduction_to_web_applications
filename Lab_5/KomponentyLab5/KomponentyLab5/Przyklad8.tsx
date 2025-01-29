import React, { useState } from 'react';

/*
    Celem tego przykładu jest wprowadzenie jak definiować funkcje poza JSXem
    Przykłady, co ZADZIAŁA:
    <button onClick={resetujTekst}>Resetuj tekst!</button>
    <button onClick={() => resetujTekst()}>Resetuj tekst!</button>
    Przykład, co NIE ZADZIAŁA:
    <button onClick={resetujTekst()}>Resetuj tekst!</button>
*/

const Przyklad8 = () => {
    const [tekst, setTekst] = useState("")

    const zmienionoInput = (e: any) => {
        setTekst(e.target.value)
    }

    const resetujTekst = () => {
        setTekst("")
    }

    return (
        <div>
            Tekst z inputa: <b>{tekst}</b>
            <br /><br />
            <input type="text" value={tekst} onChange={zmienionoInput} />
            <br /><br />
            <button onClick={resetujTekst}>Resetuj tekst!</button>
        </div>
    );
};

export default Przyklad8;