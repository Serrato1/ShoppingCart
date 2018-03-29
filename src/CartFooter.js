import React, {Component} from 'react'
let mainStyle = {
  color: "white"
};
const CartFooter = (props)=>{
  return(
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <a className="navbar-brand" style={mainStyle}> &copy; {props.theYear}</a>
    </nav>
  )
}
export default CartFooter;
