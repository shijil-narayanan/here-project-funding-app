export const initialState= {
    showNotification:false,
    notificationMessage:null,
    notificationType:'success'
}

export default function commonTasks(state= initialState,action){
    switch(action.type){
       
        case 'TOGGLE_NOTIFICATION' : {
             var {showNotification,notificationMessage,notificationType} = action.data;
            return{
                ...state,
                showNotification,
                notificationMessage,
                notificationType,
            }
        }

        default:
        return state;
    }
}