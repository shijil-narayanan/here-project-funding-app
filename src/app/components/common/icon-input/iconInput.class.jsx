import React from "react";

//import propType to validate props sent to the component
import PropTypes from 'prop-types';

// import component specific css
import "./iconInput.style.less";

export default class IconInput extends React.Component {
constructor(props){
    super(props);
    this.state = { value : '' };
    this.onValueEnter = this.onValueEnter.bind(this); // to maintain this reference
}
onValueEnter(e){
    let value = e.target.value.replace(/\D/,''); // if non-digit is entered,replace it with a space
    this.setState({value}); // update the input with the value entered
    if(this.props.onChangeCb){
        this.props.onChangeCb(value); // call back passed as props
    }
}
getCurrentValue(){
    return this.state.value; // to get currenct value of the input field
}
render () {
        const { maxLength = 13 } = this.props;
        return (
            <div className="fx-input-icon">
                <i>$</i>
                <input type="text" 
                       value={ this.state.value }
                       onChange={ this.onValueEnter}
                       maxLength={maxLength}
                />
            </div>
        );
    }
}

IconInput.propTypes = {
	maxLength:PropTypes.string
};


