import React from 'react'
import PropTypes from 'prop-types'
import App from './components/App';
import Todos from './pages/Todos/Todos';
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
class Root extends Comment{
    render(){
        let store = this.props.store;
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/todos"  component={Todos} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root