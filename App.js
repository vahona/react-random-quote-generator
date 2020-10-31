import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./style";
import QuoteFetch from './quote/QuoteFetch'
import FullQuote from './quote/FullQuote'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/FullQuote/'>
            <FullQuote />
          </Route>
          <Route path='/'>
            <QuoteFetch />
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

export default App


  