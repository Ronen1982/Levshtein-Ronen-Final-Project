import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import LoggedIn from './components/pages/auth'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/auth" component={LoggedIn} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
