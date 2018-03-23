import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/todos';
class Todos extends Component{
    state = {
        value:''
    }
    valueChange = (e) => {
      this.setState({
          value:e.target.value
      })
    };
    formSubmit = (e) => {
        const {addTodoList} = this.props;
        e.preventDefault();
        addTodoList(this.state.value)
        this.setState({
            value:''
        })
    }
    render(){
        const {listValue} = this.props;
        console.log(listValue)
        let listInputValue = listValue.todolist;
        let listInput = listInputValue.map((value,index) => {
            return(
                <p key={index}>{value.value}</p>
            )
        });
        return(
            <div>
                <form onSubmit={this.formSubmit}>
                    <input type="text" value={this.state.value} onChange={this.valueChange}/>
                    <button type="submit">提交</button>
                </form>
                <div>{listInput}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
  return {
      listValue:state
  }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodoList:value => {dispatch(action.addTodoList(value))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todos);