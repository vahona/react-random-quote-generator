import React, { useEffect, useState } from 'react'



const API_URL = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10"
 function QuoteFetch() {

  const [isquote, setIsquote] = useState([])
  // https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10

  const someQuote = async () => {

    
    try {
      const response = await fetch(API_URL)
      console.log(response);
      const quot = await response.json()
      console.log(quot);
      setIsquote(quot.quotes)
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
      <h1>Quote</h1>
     {isquote.map((quote) => {
       return (
         <div >
           <button>Random</button>
           <h5>{quote.quoteAuthor}</h5>
           
         </div>
       )
     }
     )}
    </div>
  )

}

export default QuoteFetch