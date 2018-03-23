import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Todos from './pages/Todos/Todos';
import ShopCart from './pages/shop-cart/ShopCart';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux';
import createLogger  from 'redux-logger'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducers';
// const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }
const store = createStore(
    reducer,
    applyMiddleware(createLogger,thunk)
);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/todos"  component={Todos} />
                <Route path="/shop-cart"  component={ShopCart} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
