import React, { useState } from 'react';
import Przyklad10a from './Przyklad10a';

/*
    Przykład 'komunikacji w druga strone'
    Tu widzimy DZIECKO które zmienia coś w RODZICU, poprzez przekazaną funkcję
*/

const Przyklad10 = () => {
    const [a, setA] = useState(1)
    
    const zwiekszA = () => {
        setA(a + 1)
    }

    return (
        <div>
            Wartość a: <b>{a}</b>
            <br /><br />
            <Przyklad10a zwiekszA={zwiekszA} />
            <Przyklad10a zwiekszA={zwiekszA} />
            <Przyklad10a zwiekszA={zwiekszA} />
        </div>
    );
};

export default Przyklad10;