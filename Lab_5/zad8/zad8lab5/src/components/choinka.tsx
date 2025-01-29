import { useState } from "react";

function Choinka(props: { initLevel: number }) {
  const [levels, setLevels] = useState(props.initLevel);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setLevels((prevLevel) => prevLevel + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (levels > 0) {
              setLevels((prevLevel) => prevLevel - 1);
            }
          }}
        >
          -
        </button>
      </div>
      {[...Array(levels)].map((e, i) => (
        <div
          style={{
            width: "0px",
            height: "0px",
            borderRight: `${50 + 20 * i}px solid transparent`,
            borderBottom: `${50 + 20 * i}px solid green`,

            borderLeft: `${50 + 20 * i}px solid transparent`,
          }}
          key={i}
        ></div>
      ))}
    </div>
  );
}

function Las() {
  const [count, setCount] = useState(2);
  let choinki: number[] = [];
  const [nextLevel, setNext] = useState(3);
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setNext(parseInt(e.target.value));
          }}
        ></input>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
            choinki = [...choinki, nextLevel];
          }}
        >
          Dodaj choinke
        </button>
      </div>
      {[...Array(count)].map((e, i) => (
        <Choinka initLevel={nextLevel}></Choinka>
      ))}
    </div>
  );
}
export { Choinka, Las };

///W APP WYSTARCZY WYWOŁAĆ <Las></Las>
