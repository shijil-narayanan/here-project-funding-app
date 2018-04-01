import React from "react";

import "./tooltip.style.less";

export default class Tooltip extends React.Component {
    	
	constructor(props){
		super(props);
        this.toolbarClass = `fx-tool-tip`;
	}
	render () {
		let { className,children } = this.props;
		if(className) this.toolbarClass += ` ${className}`;
		
		return (
          <div className="fx-tool-tip-master">
			  <div className={this.toolbarClass}>{children}</div>
			  <div className='fx-tool-tip-arrow'></div>
		  </div>
        )
	}
}
