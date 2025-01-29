import React from 'react';

/*
    Poniższy przykład obrazuje zachowanie, które NIE ZADZIAŁA 
    ze względu na sposób działania Reacta.

    Aby zrealizować taką funkcjonalność, musimy wykorzystań stan (state)
    - będzie to opisane w przykładzie 5.
*/

const Przyklad4 = () => {
    let x = 5 
    
    return (
        <div>
            Wartość x: {x}<br />
           <button onClick={() => {
                x = x + 1
           }}>
                Test!
           </button>
        </div>
    );
};

export default Przyklad4;