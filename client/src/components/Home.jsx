import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    // const quote = quotes[Math.floor(Math.random() * quotes.length)];

    useEffect(() => {
        fetch('http://localhost:5000/quotes')
        .then(response => response.json())
        .then(data => setQuotes(data))
        .catch(error => console.log(error.message))
    },[])

    // const generateQuote = (e) => {
    //     e.preventDefault();
    //     return quote;
    // }
  return (
    <>
    <button>Generate</button>

    {quotes.map((item) => { return (
        <div>
            <h3>{item.quotes}</h3>
            <h5>{item.author}</h5>
        </div>
    )})}
    </>
  )
}

export default Home