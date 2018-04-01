
import React from "react";

// import component specific css
import "./button.style.less";

//import propType to validate props sent to the component
import PropTypes from 'prop-types';

export default class Button extends React.Component{

render(){
		var {onClick,disabled,className,children} = this.props; // destructuring the props received
		this.buttonClass = 'fx-btn ';
		if(className){
			this.buttonClass+= ' '+className; // appending classNames to the buttons passed via props
		}
		return (
			<button className={this.buttonClass} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		)
	}
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	className:PropTypes.string,
	disabled:PropTypes.bool,
	children:PropTypes.string.isRequired
};