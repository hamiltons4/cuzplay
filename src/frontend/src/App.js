import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import {
  ApolloProvider,
  ApolloClient,
  createBatchingNetworkInterface
} from 'react-apollo'

import CreateView from './views/CreateView'
import PhotoView from './views/PhotoView'
import PhotoPageView from './views/PhotoPageView'
import LoginView from './views/LoginView'
import LogoutView from './views/LogoutView'

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://localhost:8000/gql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

networkInterface.use([
  {
    applyBatchMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null
      req.options.headers['authorization'] = `JWT ${token}`
      next()
    },
  },
])

const client = new ApolloClient({
  networkInterface: networkInterface,
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>


    )
  }
}


export default App;
