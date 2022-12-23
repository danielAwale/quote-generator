import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    const generateQuote = (e) => {
        e.preventDefault();

    useEffect(() => {
        fetch('http://localhost:5000/quotes')
        .then(response => response.json())
        .then(data => {
            let quote =  quotes[Math.floor(Math.random() * quotes.length)];
            setQuotes(data[quote])
        })
        .catch(error => console.log(error.message))
    },[])

}

  return (
    <>
    <button onClick={(e) => generateQuote(e)}>Generate</button>
    </>
  )
}

export default Home