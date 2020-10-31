// import React from 'react'
// import { Link, useParams } from 'react-router-dom'



// const BASE_URL = "https://quote-garden.herokuapp.com/api/v2/authors/"
// const URL = "?page=1&limit=10"

// export default function Randome() {
//   const [isauthore, setAuthore] = useState([])
//   const { authorName } = useParams;
//   const someAthour = async () => {

//     try {
//       const response = await fetch(BASE_URL + authorName + URL)
//       console.log(response);
//       const author = await response.json()
//       console.log(author);
//       setAuthore(author.quotes)
//       console.log(author)
//     }
//     catch (e) {
//       console.error(e);
//     }
//   }


//   useEffect(() => {

//     someAthour()

//   }, [])


//   return (
//     <div>Me</div>
//   )
// }


