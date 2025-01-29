import React from 'react';

const Przyklad10a = (props: any) => {
    const zwiekszA = props.zwiekszA 

    return (
        <div>
            <button onClick={zwiekszA}>
                Zwiększ A!
            </button>
        </div>
    );
};

export default Przyklad10a;