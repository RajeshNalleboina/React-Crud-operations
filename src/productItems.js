import React, { Component } from 'react';

class product_item extends Component {
    constructor(props){
        super(props);
        this.onDelete=this.onDelete.bind(this);
        this.state={
            isEdit: false
        };
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }

    onDelete(){
        const {onDelete,name}=this.props;
        onDelete(name);
      }
    
      onEdit(){
        this.setState({ isEdit: true});
      }

      onEditSubmit(data){
        data.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value,this.props.name);
        this.setState({isEdit: false});
      }

    render() {
        const {name,price}=this.props;
        return (
            <div className='App'>
            {
                this.state.isEdit
                 ? (
                        <form onSubmit={ this.onEditSubmit}>
                            <input placeholder='Name' ref={nameInput=>this.nameInput=nameInput} defaultValue={name} />
                            <input placeholder='Price' ref={priceInput=>this.priceInput=priceInput} defaultValue={price} />
                            <button>Save</button>
                        </form>
                    ) 
                 :
                    ( 
                        <div>
                            <span>{name}</span>
                            {` | `}
                            <span>{price}</span>
                            {` | `}
                            <button onClick={this.onEdit}>Edit</button>
                            {` | `}
                            <button onClick={this.onDelete}>Delete</button> 
                        </div>
                    )
                    
            }
            
          </div>
        );
    }
}

export default product_item;