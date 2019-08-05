import React, {Component} from 'react';
import ProductItem from './productItems';
import AddItems from './addItems';
import './App.css';

const products=[
  {
    name:'Iphone',
    price:243
  },
  {
    name:'Iphone1',
    price:2430
  }
];
localStorage.setItem('products',JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete=this.onDelete.bind(this);
    this.onAdd=this.onAdd.bind(this);
    this.onEditSubmit=this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const products=this.getProducts();
    this.setState({ products });
  }

  getProducts(){
    return this.state.products;
  }

  onAdd(name, price){
    const products=this.getProducts();    
    products.push({
      name,
      price
    });
    this.setState({ products });
  }
  onDelete(name){
    
    // console.log(name);
    const products=this.getProducts();
    const filterProducts=products.filter(product=>{
      return product.name !== name;
    });
    console.log(filterProducts);
    this.setState({products:filterProducts});
  }

  onEditSubmit(name,price,chagedData){
    let products=this.getProducts();
    products=products.map(product=>{
      if(product.name===chagedData){
        product.name=name;
        product.price=price;
      }
      return product;
    });
    this.setState({ products });
  }

  render() {
    return (
      <div className='App'>
        <h1>Product Manager</h1>
        <AddItems
        onAdd={this.onAdd}
        />
        {
          this.state.products.map(product=>{
            return(
              <ProductItem
              key={product.name}
              {...product} // Spreed-operator  
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
              />

            )
          })
        }
      </div>
    );
  }
}

export default App;
