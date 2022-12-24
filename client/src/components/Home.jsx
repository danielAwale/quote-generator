import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    const generateQuote = () => {

        fetch('http://localhost:5000/quotes')
        .then(response => response.json())
        .then(data => {
            setQuotes(data[Math.floor(Math.random() * data.length)])
        })
        .catch(error => console.log(error.message))

    }
    
    useEffect(() => {
        generateQuote()
    }, [])


  return (
    <>
    <button onClick={() => generateQuote()}>Generate</button>
    <div>{quotes.quotes}</div>
    <div>{quotes.author}</div>
    </>
  )
}

export default Home