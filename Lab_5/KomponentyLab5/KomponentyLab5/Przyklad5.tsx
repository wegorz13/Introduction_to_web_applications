import React, { useState } from 'react';


const Przyklad5 = () => {
    const [liczba, setLiczba] = useState(5)

    return (
        <div>
            Wartość x: {liczba}<br />
           <button onClick={() => {
                setLiczba(staraLiczba => staraLiczba + 1)
                setLiczba((staraLiczba) => staraLiczba + 1)
                setLiczba((staraLiczba) => {
                    return staraLiczba + 1
                })
           }}>
                Test!
           </button>
        </div>
    );
};

/*
    setTimeout(() => cos(), 2000)
    setTimeout(() => cos(), 2000)
    setTimeout(() => cos(), 2000)
    setTimeout(() => cos(), 2000)
*/
/*
    Co dodatkowo warto pokazać w tym przykładzie?
    Co jeżeli w onClicku podwójnie użylibyśmy setLiczba(liczba + 1) ? 
    Prawdopodobne zachowanie: Po kliknieciu zwiekszy sie tylko raz 
    Uzylismy dwa razy, wiec oczekiwalibysmy ze zwiekszy sie podwójnie
    Wytłumaczenie dlaczego na ćwiczeniach - chodzi o moment, w którym wykonuje sie setLiczba 
    Rozwiązanie?
    setLiczba(staraLiczba => staraLiczba + 1)
*/

export default Przyklad5;