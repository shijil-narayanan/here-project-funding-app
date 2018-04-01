import React from "react";

import "./layout.style.less";

//import propType to validate props sent to the component
import PropTypes from 'prop-types';

export class Row extends React.Component {
	constructor(props){
		super(props);

		this.className = `fx-grid`;

		if(props.className) this.className += ` ${props.className}`; // appending classNames to the Column passed via props
	}
	render () {
		return (
			<div className={this.className}>{this.props.children}</div>
        );
	}
}

Row.propTypes = {
	className:PropTypes.string,
	children:PropTypes.element
};

export class Column extends React.Component {
	
	render () {
		let { id = '', size , className , onClick ,style ={} , children } = this.props;
		this.columnClass = size ? `col-${size}` : `col`;

		if(className){
			this.columnClass+= ' '+className; // appending classNames to the Column passed via props
		}

		return (
			<div id={id} 
				 className={this.columnClass} 
				 onClick={()=> onClick && onClick()} 
				 style={style}
			>
				{children} 
			</div>
		)
	}
}

Column.propTypes = {
	onClick: PropTypes.func,
	size:PropTypes.string,
	className:PropTypes.string,
	children:PropTypes.element,
	style:PropTypes.object,
	id:PropTypes.string
};

export default { Row, Column }
