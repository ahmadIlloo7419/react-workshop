import React from 'react';
import './styles.css';

export default class ClassName extends React.Component {
    constructor(){
        super();
        this.state = {
            formValues : {}
        };
        //
        this.changeFieldHandler = this.changeFieldHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.productInformation.name != this.state.formValues.name){
            this.setState({formValues:nextProps.productInformation})
        }
    }
    changeFieldHandler(event){
        const data  = {[event.target.id] : event.target.value};
        this.setState({formValues : Object.assign({},this.state.formValues,data)});
    }
    submitHandler(){
        this.toggleModal();
        this.props.addProduct(this.state.formValues);
    }
    render() {
        return (
            <div>
                <div className="modal-container" style={{display:(this.props.isShow?"block":"none")}}>
                    <div className="content">
                        <i onClick={this.props.closeModal}>X</i>
                        <h3>Product information</h3>
                        <span className="formElement">
                            <label htmlFor="name">Name :</label>
                            <input type="text" placeholder="Name... " id="name" onChange={this.changeFieldHandler} value={this.state.formValues.name}/>
                        </span>
                        <span className="formElement">
                            <label htmlFor="price">Price :</label>
                            <input type="text" placeholder="Price... " id="price"  onChange={this.changeFieldHandler} value={this.state.formValues.price}/>
                        </span>
                        <span className="formElement">
                            <label htmlFor="imagePath">Image :</label>
                            <input type="text" placeholder="Image path... " id="imagePath"  onChange={this.changeFieldHandler} value={this.state.formValues.imagePath}/>
                        </span>
                        <button onClick={this.submitHandler}>SAVE</button>
                    </div>

                </div>
            </div>
        );
    }
} 