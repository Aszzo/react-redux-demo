import React,{Component} from 'react';
import Increase from './Increase';
import Decrease from './Decrease';
import {connect} from 'react-redux';
import * as action from '../actions/index';
class App extends Component{
    render(){
        const {count, add, del} = this.props;
        return(
            <div>
                <Increase click={add}/>
                <span>{count.todos}</span>
                <Decrease click={del}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(action.inCrease()),
        del: () => dispatch(action.deCrease())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);