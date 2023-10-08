import { Route, Routes, Router } from 'react-router-dom'
import Learn from './components/Learn'
import AuthRoute from './AuthRoute'
import Market from './components/Market'
import Community from './components/Community'

const App = () => {


  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AuthRoute />} />
        <Route exact path='/marketplace' element={<Market />} />
        <Route exact path='/learn' element={<Learn />} />
        <Route exact path='/community' element={<Community />} />
      </Routes>
    </div>
  )
}

export default App
