import React from "react";
//import propType to validate props sent to the component
import PropTypes from 'prop-types';
// import component specific css
import "./fund-card-style.less";
import Button from 'ButtonClass';
import Utils from 'Utils';
import LinearProgressBar from 'LinearProgressBarClass';
import Tooltip from 'ToolTipClass';
import IconInput from 'IconInputClass';
import {Row,Column} from 'LayoutClass';
import Notification from 'NotificationClass';
import classnames from "classnames";

export default class FundCard extends React.Component {
    constructor(props){
        super(props);
        // state variables
        this.state = { enteredFundAmount : ''};

        // maintaining this reference
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.triggerInProgressMsg = this.triggerInProgressMsg.bind(this);
    }
    
    render () {
        const { 
            id , 
            fundingObtained, 
            fundingRequired ,
            noOfDonors ,
            showNotification,
            fundingEndTimeStamp 
        } = this.props; // destructuring props

        const percent = Math.ceil((fundingObtained/fundingRequired) * 100); // progress bar percent
        
        this.remainingFund = fundingRequired - fundingObtained; 

        return (
            <div className='fx-fund-card'>
            <Tooltip>
                { this.remainingFund > 0 && <span> $ {this.remainingFund} still needed for this project</span>}
                { this.remainingFund == 0 && <span> Funding completed for this project </span>}
            </Tooltip>
            <div className='fx-grey-border fx-margin-t-10'>
                <LinearProgressBar  percent={percent} id={`fx-prog-${id}`}/>
                <div className='fx-padding-20'>
                    <div>
                        <span className='fx-danger-text'>
                            Only {Utils.getDateDiffrence(fundingEndTimeStamp)} days left 
                        </span>
                        <span> to fund this project.</span>
                    </div>
                    <div className='fx-donor-text'>
                        Join the <span className='fx-donor-count'>{noOfDonors} </span> 
                        <span>other donors who have already supported this project.Every dollar helps.</span>
                    </div>
                    <Row className='table fx-padding-t-20' >
                        <Column size='6'>
                            <IconInput 
                                onChangeCb={enteredFundAmount => this.setState({enteredFundAmount})} 
                                ref={(inst) => { this.fundInputInstance = inst; }}
                            />
                        </Column>
                        <Column size='6' className='fx-padding-l-15'>
                            <Button className='success lg' 
                                    onClick={ () => this.handleGiveNowClick(this.props) }
                                    disabled={this.remainingFund == 0}>
                                Give Now
                            </Button>
                        </Column>
                    </Row> 
                    <div className={classnames(
                            {'fx-visibility-hidden':!this.state.enteredFundAmount},
                            'fx-why-giv-text')
                            }
                            onClick={this.state.enteredFundAmount && this.triggerInProgressMsg}>
                            Why give ${this.state.enteredFundAmount} ?
                    </div>
                </div>
            </div>
                {this.paintActionButtons()}
                {showNotification && <Notification  {...this.props}/>}
            </div>
         );
    }
    paintActionButtons(){
        return (
            <Row className='table fx-padding-tb-15'> 
                <Column size='6'>
                    <Button className='default' onClick={this.handleSaveClick} >Save for later</Button>
                </Column>  
                <Column size='6' className='fx-padding-l-15'>
                    <Button className='default' onClick={this.triggerInProgressMsg}>Tell your friends</Button>
                </Column>  
            </Row>
            )
    }

    // method to be called on give now button click

    handleGiveNowClick({
            id,
            minimumFundingAmount,
            updateValue,
            toggleNotification,
            fundingRequired,
            fundingObtained // destructuring done at parameter level of this.props;
        }){

        let value = Number(this.fundInputInstance.getCurrentValue());
        
        // validation layer     
        if(!value){
            //No value ? throw an error 
            toggleNotification(this.getNotifObj('Please enter an amount','error'));
        }else if(value > this.remainingFund){
            //entering value more than expected error
            toggleNotification(this.getNotifObj(`Entered value cannot be more than $ ${this.remainingFund}`,'error'));
        }
        else if(value < minimumFundingAmount && this.remainingFund > minimumFundingAmount){
            // trigger error notification for minimum amount validation
            toggleNotification(this.getNotifObj(`Minimum amount expected is $ ${minimumFundingAmount}`,'error'));
        }else{
            // all good to go,lets update the fundingObtained value in our redux store 
            updateValue({id,value}); 
            toggleNotification(this.getNotifObj(`Received.Thanks for contributing $ ${value} !`,'success'));
        }
        
    }

     //method to be called when 'Tell your friends' is clicked
    triggerInProgressMsg(){
         this.props.toggleNotification(this.getNotifObj('Sorry,This feature is still under progress','error'));
    }

    //method to be called when 'Save for later' is clicked
    handleSaveClick(){
        let value = Number(this.fundInputInstance.getCurrentValue()); // get input value
        let {toggleNotification} = this.props; // get toggleNotification method courtesy destructuring of props
        if(value) 
        toggleNotification(this.getNotifObj('Data has been saved !','success'));
        else 
        toggleNotification(this.getNotifObj('Please enter an amount first !','error'));
    }

    // a method which will return a notification object that needs to be passed to the reducer
    getNotifObj(notificationMessage,notificationType){
        return {
            showNotification:true,
            notificationMessage,
            notificationType
        }
    }
}
