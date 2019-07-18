import React from 'react'
import SearchForm from './components/SearchForm'
//import SearchResults from './components/SearchResults'

//import {Navbar} from './components'
//import Routes from './routes'

//should I make App a connected component? so it can know whether there are search results or not?

const App = () => {
  return (
    <div>
        <h1>Title of the Song</h1>
        <SearchForm />
        {/* <SearchResults /> */}
    </div>
  )
}

export default App