import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'



const BASE_URL = "https://quote-garden.herokuapp.com/api/v2/authors/"
const URL = "?page=1&limit=10"

export default function Randome() {
  const [isauthore, setAuthore] = useState([])
  const { authorName } = useParams();
  const someAthour = async () => {

    try {
      const response = await fetch(BASE_URL + authorName + URL)
      const author = await response.json()
      setAuthore(author.quotes)

    }
    catch (e) {
      console.error(e);
    }
  }
 

  useEffect(() => {
    someAthour()

  }, [])


  return (
    <div>
      <button className="full_quote">Random</button>
      <h2> {isauthore.quoteGenre}</h2>
      {isauthore.map((author) =>  {
        return (
          <div className="container"  key={author._id}>
            <p className="bar">
              {author.quoteText}
          </p>
          </div>
        )}
      )}
      <button className="back"><Link to="/" className="back_link">Back to previous page </Link></button>
    </div>
  )
}


