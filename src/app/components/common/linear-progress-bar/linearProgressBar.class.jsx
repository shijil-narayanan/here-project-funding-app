import React from "react";

import { findDOMNode } from 'react-dom';

//import propType to validate props sent to the component
import PropTypes from 'prop-types';

// import component specific css
import "./linearProgressBar.style.less";

export default class LinearProgressBar extends React.Component {
constructor(props){
    super(props);
}
componentDidMount(){
    setTimeout(()=>{
        this.calculateProgressPercent();
    },0)
}

componentWillReceiveProps(newProps){
    if(newProps.percent != this.props.percent)
    this.calculateProgressPercent(newProps.percent); //trigger calculation the percent when new percent is received
}

calculateProgressPercent(percent = this.props.percent){
    const  baseElement = findDOMNode(this.refs[this.props.id]); // getting the progress bar element
    baseElement.querySelector('.fx-prog-percent').style.width = `${percent}%`; // updating the percent
}
render () {
        let { id , className = '' } = this.props;
        return (
            <div ref={id} className={className}>
                <div className="fx-progress-meter" >
                    <span style={{'width':0}} className='fx-prog-percent'></span>
                </div>
            </div>
        );
    }
}

LinearProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    id:PropTypes.string.isRequired,
    className:PropTypes.string
};
