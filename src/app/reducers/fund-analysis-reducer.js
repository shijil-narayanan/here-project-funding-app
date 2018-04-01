
import dummyJsonData from 'app/dummy-json';

export default function fundListReducer(state=dummyJsonData,action)  {
    switch(action.type){
        
        case "UPDATE_FUND_OBTAINED_VALUE" : {
            const { id, value } = action.data;
            return state.map( fund => 
                (fund.id == id)  
                ? { ...fund, 
                    fundingObtained : Number(fund.fundingObtained) + Number(value)
                }
                : fund
             )
        }
        default:
        return state;

    }
}

