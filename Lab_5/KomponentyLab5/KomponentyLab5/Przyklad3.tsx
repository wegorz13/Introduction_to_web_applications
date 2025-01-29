import React from 'react';
import Przyklad3a from './Przyklad3a'


const Przyklad3 = () => {
    const osoby = [
        { imie: "Jan", nazwisko: "Kowalski" },
        { imie: "Jan", nazwisko: "Nowak" },
        { imie: "Adam", nazwisko: "Mickiewicz "}
    ]

    return (
        <div>
            {[
                <div>e</div>, <div>f</div>
            ]}
            
           {osoby.map((osoba) => {
            return (
                <div>
                    Komponent z osobą:
                    <Przyklad3a 
                        imie={osoba.imie}
                        nazwisko={osoba.nazwisko}
                    />
                    <br /><br />
                </div>
            )
           })}
        </div>
    );
};

/*
    osoby.map((osoba) => {
        return <div>cos</div>
    })

    osoby.map((osoba) => (
        <div>cos</div>
    ))

*/

export default Przyklad3;