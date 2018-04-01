//Import Main React
import React from "react";
import {render} from "react-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as fundActions from 'app/actions'
import './fund-analysis-style.less';

import FundCard from 'FundCardClass';

class FundAnalysis extends React.Component{
    
    render(){
        const { fundLists , actions ,commonHandler} = this.props;
        return (
            <div className='fx-fund-container'>
                {fundLists.map(fund => <FundCard {...fund} {...actions} {...commonHandler}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    fundLists: state.fundLists,
    commonHandler:state.commonHandler
})
const mapDispatchToProps = (dispatch)=>({
    actions: bindActionCreators(fundActions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FundAnalysis);
    
