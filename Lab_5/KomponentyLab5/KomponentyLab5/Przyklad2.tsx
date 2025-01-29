import React from 'react';

/*
    Przyklad2 - Przykład z przekazaniem "propsa"
    any wymagane ze względu na typescripta - w przyszłości będziemy używać poprawnych typowań 

*/

const Przyklad2 = (props: any) => {
    const { imie, nazwisko } = props 
    /*
        Przypomnienie z zajęć z expressa - powyższa linijka oznacza to samo co:
        const imie = props.imie 
        const nazwisko = props.nazwisko 
    */


    /*
        Wewnątrz JSX (TSX) możemy wstawić zmienną w nawiasach { }
        Uwaga! Wewnątrz JSX nie używamy "class" do klas, tylko "className"
    */
    return (
        <div>
            <span className="imie">
                Imie: <b>{imie}</b><br />
            </span>
            Nazwisko: {nazwisko}
        </div>
    );
};

export default Przyklad2;

/*
Przykład zastosowania:

<Przyklad2 
    imie={"Jan"}
    nazwisko={"Kowalski"}
/>
*/