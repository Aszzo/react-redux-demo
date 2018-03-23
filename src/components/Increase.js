import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Increase extends Component{
    static PropTypes={
        click:PropTypes.func
    };
    render(){
        return(
            <button onClick={this.props.click}>+</button>
        )
    }
}
export default Increase;
