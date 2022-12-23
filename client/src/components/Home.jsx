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
    </>
    
  )
}

export default Home