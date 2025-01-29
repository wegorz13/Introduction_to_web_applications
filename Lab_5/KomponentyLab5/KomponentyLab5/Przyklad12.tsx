import React, { useEffect, useState } from 'react';

const Przyklad12 = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
            .then(res => res.json())
            .then((data) => {
                setQuotes(data.quotes)
            })
    }, [])

    return (
        <div>
            {quotes.map((quote: any) => (
                <div>{quote.quote}</div>
            ))}
        </div>
    );
};

export default Przyklad12;