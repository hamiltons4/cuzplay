import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import CreateView from './views/CreateView'
import PhotoView from './views/PhotoView'
import PhotoPageView from './views/PhotoPageView'
import LoginView from './views/LoginView'
import LogoutView from './views/LogoutView'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/messages/create/">Create Post</Link></li>
            <li><Link to="/login/">Login</Link></li>
            <li><Link to="/logout/">Logout</Link></li>
          </ul>
          <Route exact path="/" component={PhotoPageView} />
          <Route exact path="/login/" component={LoginView} />
          <Route exact path="/Logout/" component={LogoutView} />
          <Switch>
            <Route path="/messages/create/" component={CreateView} />
            <Route path="/messages/:id/" component={PhotoView} />
          </Switch>
        </div>
      </Router>


    )
  }
}


export default App;
