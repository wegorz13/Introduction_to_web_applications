import React, { useState } from 'react';

const Przyklad11 = () => {
    const [osoba, setOsoba] = useState({
        imie: "Jan",
        nazwisko: "Kowalski",
        wiek: 20
    })

    return (
        <div>
            <button onClick={() => {
                //Brzydki/długi zapis
                //setOsoba({imie: osoba.imie, nazwisko: osoba.nazwisko, wiek: osoba.wiek + 1})
                //Lepszy zapis
                //setOsoba({...osoba, wiek: osoba.wiek + 1})
                //Najlepszy zapis
                setOsoba(ostatniaOsoba => ({...ostatniaOsoba, wiek: ostatniaOsoba.wiek + 1}))
            }}>
                Zwiększ wiek kowalskiego
            </button>
            <br /><br />
            Imie: <b>{osoba.imie}</b><br />
            Nazwisko: <b>{osoba.nazwisko}</b><br />
            Wiek: <b>{osoba.wiek}</b>
        </div>
    );
};

export default Przyklad11;