import React , {Component} from 'react' ;

class AddItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      productId: 40 ,
      quantity: 1
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    let id = this.state.productId;
    let product =  {
      id: id,
      product: {
        name: this.props.products[parseInt(id)].name,
        priceInCents: this.props.products[parseInt(id)].priceInCents,
      },
      quantity: this.state.quantity
    }
    this.props.addItem(product);
  }
  render(){
    console.log(this.state);
    return(
      <div>
        <br />
        <form >
          <label htmlFor="quantity-field">Quanity</label>
          <input type="number" id="quanity-field" className="form-control form-control-sm" placeholder="quanity" onChange={(event ) => this.setState({quantity: event.target.value})}></input>
          <label htmlFor="product-select">Select Product</label>
          <select className="form-control form-control-sm" id="product-select" onChange={e => this.setState({productId: e.target.value})}>
            <option>Select A Product</option>
            {
              this.props.products.map((product , index)=>{
                return <option key={index} value={index}> {product.name}</option>
              })
            }
          </select><br />
          <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem;
