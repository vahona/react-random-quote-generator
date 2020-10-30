import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Quote(isquote) {

  
  useEffect(() => {
    setIsquote()
  }, [])

  return (
    <div>
      <Link><button className="author">{isquote.quoteAuthor}</button> </Link>
    </div>
  )
}

export default Quote

 