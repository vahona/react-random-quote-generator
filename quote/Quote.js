import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Quote({isquote}) {

  
  useEffect(() => {
    // setIsquote()
  }, [])

  return (
    <div>
      <Link to={`${isquote.quoteAuthor}`}><button className="author">{isquote.quoteAuthor}</button></Link>
    </div>
  )
}



 