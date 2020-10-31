import React, { useEffect, useState } from 'react'
import Quote from './Quote'
import { Link } from 'react-router-dom'


const API_URL = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10"

export default function FullQuote() {

  const [isquotes, setIsquotes] = useState([])
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

  useEffect(() => {
    someQuote()
    
  }, [])

    return (
      <div>
     {
   isquotes.map((quote) => {
     return (
       <div>
         <h1>{quote.quoteAuthor}</h1>
         <div>{quote.quoteText}</div>
       </div>
     )
   })
 }
 <Link to="/" > Back to main page </Link>
</div>
    )
}

// export default FullQuote


// { isquotes, setIsquotes }

