import React, { useEffect, useState } from 'react'
import { Link, Router } from 'react-router-dom'
import {Quote} from './Quote'




const QUOTE_URL = "https://quote-garden.herokuapp.com/api/v2/quotes/random"


 function QuoteFetch() {

 
  const [isquote, setIsquote] = useState({})
  // const [isopen, setIsopen] = useState(false) 

  const singleQuote = async () => {
    try {
      const res = await fetch(QUOTE_URL)
      console.log(res);
      const isquote = await res.json()
      console.log(isquote);
      setIsquote(isquote.quote)
      console.log(isquote)
    }
    catch (e) {
      console.error(e);
    }
  } 

  useEffect(() => {
    // someQuote()
    singleQuote()
  }, [])

  return (
    <div >
        <h1>Quotes</h1>
        <div >
          <button>Random</button>
          <div>{isquote.quoteText}</div>
          <Quote isquote={isquote} />
        </div>
    </div>
  )

}

export default QuoteFetch