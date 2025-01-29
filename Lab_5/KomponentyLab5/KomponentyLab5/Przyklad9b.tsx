import React, { useEffect, useState } from 'react';

/*
    useEffect
    "Przy wykryciu zmiany KONKRETNEGO stanu"
*/

const Przyklad9b = () => {
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    const [c, setC] = useState(1)

    useEffect(() => {
        console.log(`Wykryto zmiane! (a: ${a} b: ${b})`)
    }, [a])

    useEffect(() => {
        console.log(`WYKRYTO ZMIANE! (a: ${a} b: ${b})`)
    }, [b, c])

    return (
        <div>
            <button onClick={() => {
                setA(a + 1)
            }}>a = {a}</button>
            <br /><br />
            <button onClick={() => {
                setB(b + 1)
            }}>b = {b}</button>
            <br /><br />
            <button onClick={() => {
                setC(c + 1)
            }}>c = {c}</button>
        </div>
    );
};

export default Przyklad9b;