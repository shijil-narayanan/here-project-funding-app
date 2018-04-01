import React from "react";
import classnames from "classnames";
import './notification.style.less';
export default class Notification extends React.PureComponent{

    componentWillUnmount(){
         clearInterval(this.interval);
    }

    render(){
         let {
              toggleNotification,
              notificationType,
              notificationMessage,
         } = this.props; // destructing props
         
         // setting interval to show the notificstion
         this.interval = setInterval(()=>{toggleNotification(false,null)}, 5000); 

         // flag to indicate success or error notification
         let isSuccess = notificationType == 'success';
         
         return(
            <div className="fx-alert  animated fadeInUp">
                <div className={classnames({"fx-success":isSuccess,"fx-error":!isSuccess},"fx-alert-container")}>
                   
                    <div className='fx-close-icon' onClick={()=> toggleNotification(false,null)}>
                        <i className="fas fa-times-circle fx-white"></i>
                    </div>

                    <div className="fx-alert-msg fx-disp-inline fx-padding-l-15">
                       
                        <p className="fx-alert-title">
                            <i className={classnames({
                                "fa-check-circle":isSuccess,"fa-exclamation-triangle":!isSuccess},
                            "fas fx-white")}></i>&nbsp;
                             {notificationType}!
                        </p>
                        <p>{notificationMessage}</p>
                    </div>
                </div>
            </div>
        )
    }
}
