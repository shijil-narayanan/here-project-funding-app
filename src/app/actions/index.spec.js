import * as actions from './index'

describe('fund analysis actions', () => {

    let notificationObj = {
        showNotification:true,
        notificationMessage:'This is a test msg',
        notificationType:'error'
    }

    it('updateValue should create UPDATE_FUND_OBTAINED_VALUE action', () => {
        expect(actions.updateValue({id:1,value:10})).toEqual({
            type: 'UPDATE_FUND_OBTAINED_VALUE',
            id: 1,
            value: 10
        })
    })

    it('toggleNotification should create TOGGLE_NOTIFICATION action', () => {
        expect(actions.toggleNotification({
            ...notificationObj
        })).toEqual({
            type: 'TOGGLE_NOTIFICATION',
            ...notificationObj
        })
    })

})
