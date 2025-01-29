import { useEffect, useState } from "react";

function Licznik() {
  const [liczba, setLiczba] = useState<number>(() => {
    const zapisanyLicznik = localStorage.licznik;
    return zapisanyLicznik ? parseInt(zapisanyLicznik, 10) : 0;
  });
  useEffect(() => {
    localStorage.licznik = liczba;
  }, [liczba]);

  return (
    <div>
      <h1>{liczba}</h1>
      <button
        onClick={() => {
          setLiczba((staraLiczba) => staraLiczba + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export { Licznik };
