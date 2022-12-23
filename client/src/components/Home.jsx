import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/quotes')
        .then(response => response.json())
        .then(data => setQuotes(data))
        .catch(error => console.log(error.message))
    },[])

    const generateQuote = (e) => {
        e.preventDefault();
    }
  return (
    <>
    <button onClick={(e) => generateQuote(e)}>Generate</button>
    {quotes.map(item => {
        return (
            <div>
                <h6>{item.quotes}</h6>
                <h3>{item.author}</h3>
            </div>
        )
    })}
    </>
    
  )
}

export default Home