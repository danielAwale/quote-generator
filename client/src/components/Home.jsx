import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    const generateQuote = (e) => {
        e.preventDefault();
    }
  return (
    <button onClick={(e) => generateQuote(e)}>Generate</button>
  )
}

export default Home