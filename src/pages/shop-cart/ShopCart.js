import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getAllProducts} from '../../actions/product'
import ProductList from './productList/ProductList';
class ShopCart extends Component{
    // componentWillMount(){
    //
    // };
    getProducts = () =>{
        this.props.getAllProducts();
    };
    render(){
        return(
            <div>
                <h1>购物车示例</h1>
                <hr/>
                <ProductList/>
                <button onClick={this.getProducts}>获取所有商品</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    product:state
});
export default connect(mapStateToProps,{getAllProducts})(ShopCart);