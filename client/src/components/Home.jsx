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

    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{quotes.quotes}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{quotes.author}</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => generateQuote()}>
            Generate
        </button>
    </div>
    </>
  )
}

export default Home