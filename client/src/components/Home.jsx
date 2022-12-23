import React, {useState} from 'react'
import { useEffect } from 'react';

const Home = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/quotes')
        .then(response => response.json())
        .then(data => {
            setQuotes(data)
        })
        .catch(error => console.log(error.message))
    },[])


  return (
    <>
    {quotes.map(quote => { return (
    <div>
    <h6>{quote.quotes}</h6>
    <h3>{quote.author}</h3>
    </div>
    )})}
    </>
  )
}

export default Home