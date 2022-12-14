import React from "react";

class AddItem extends React.Component {

  // creating state in class component 

    constructor(props){
        super(props);
        this.state={
            productName:"",
            productPrice:0
        };
    }

  render() {
    return (
      <form className="row mb-5 input-form " onSubmit={(e)=>{

        // console.log(this.props);

        e.preventDefault();

        if(this.state.productName===""){
          alert("Fill Items Details")
          return ;
        } 

        this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }} >

        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"

            onChange={(e)=>{
                this.setState( {productName : e.currentTarget.value})
            } }

            value={this.state.productName}
          />
        </div>

        <div className="mb-3 col-4">
          <label htmlFor="numberPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="numberPrice"
            name="productPrice"
            
            onChange={(e)=>{
                this.setState( {productPrice : Number(e.currentTarget.value)})
            } }

            value={this.state.productPrice}
          />
        </div>

       
        <div className="mb-3 col-4 add-button">
          <label htmlFor="AddItem" className="form-label">
          Click To Add Item
          </label>
           <div>
              <button type="submit" className="btn btn-primary col-4" >
              Add 
              </button>
           </div>
         
        </div>
   
      </form>
    );
  }
}

export default AddItem;
