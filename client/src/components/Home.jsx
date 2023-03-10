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

<div className="m-auto h-screen w-1/2 flex justify-center items-center">
  <div class="rounded-lg shadow-lg max-w-3x">
    <h5 class="text-slate-300 text-4xl leading-tight font-medium mb-2">{quotes.author}</h5>
    <p class="text-slate-200 text-2xl mb-4 font-playfair">
      {quotes.quotes}
    </p>
    <div className='flex justify-center'>
        <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=> generateQuote()}>Generate</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Home