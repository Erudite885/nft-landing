import React from 'react'
import {Header, Hero, Top, Subscribe, Footer} from './components/index'

const App = () => {
  return (
    <div className='container mx-auto sm:px-10 px-5 pt-10'>
      <Header/>
      <Hero/>
      <Top/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App;