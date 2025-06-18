import { createRoot } from 'react-dom/client'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './pages/Home'
import { StrictMode } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import appStore from './store/appStore'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
)