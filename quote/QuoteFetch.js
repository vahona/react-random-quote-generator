import React, { useEffect, useState } from 'react'
import { Link, Router } from 'react-router-dom'
import {Quote} from './Quote'



const API_URL = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10"
const QUOTE_URL = "https://quote-garden.herokuapp.com/api/v2/quotes/random"


 function QuoteFetch() {

  const [isquotes, setIsquotes] = useState([])
  const [isquote, setIsquote] = useState({})
  // const [isopen, setIsopen] = useState(false) 

 
 

  const someQuote = async () => {

    
    try {
      const response = await fetch(API_URL)
      console.log(response);
      const quot = await response.json()
      console.log(quot);
      setIsquotes(quot.quotes)
      console.log(quot)
    }
    catch (e) {
      console.error(e);
    }
  }


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
    someQuote()
    singleQuote()
  }, [])

  return (
    <div >
        <h1>Quotes</h1>
        <div >
          <button>Random</button>
          <div>{isquote.quoteText}</div>
          <button className="author">{isquote.quoteAuthor}</button>
          {/* <Quote isquote={isquote.quote} /> */}
        </div>
    </div>
  )

}

export default QuoteFetch