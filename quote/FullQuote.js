import React from 'react'

function FullQuote({isquotes, setIsquotes}) {
    return (
      <div>
        {isquotes.map((quote) => {
          return(
            <div>
              <h1>{quote.quoteAuthor}</h1>
              <div>{quote.quoteText}</div>
          </div>
          )
        })}
      </div>
    )
}

export default FullQuote