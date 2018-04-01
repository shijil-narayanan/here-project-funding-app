import fundListReducer from './fund-analysis-reducer'

describe('fund analysis reducer', () => {
  it('should handle initial state', () => {
    expect(
      fundListReducer(undefined, {})
    ).toEqual([])
  })

  it('should update fund obtained value UPDATE_FUND_OBTAINED_VALUE', () => {
    expect(
      fundListReducer([
        {
            id: 1,
            fundingRequired:200,
            fundingObtained:83,
            minimumFundingAmount:20,
            noOfDonors:15,
            fundingEndTimeStamp:1523008010123
        },
        {
            id: 2,
            fundingRequired:230,
            fundingObtained:50,
            minimumFundingAmount:20,
            noOfDonors:19,
            fundingEndTimeStamp:1523526410635
        },
      ], {
        type: 'UPDATE_FUND_OBTAINED_VALUE',
        data:{
            id:1,
            value:30
        }
      })
    ).toEqual([
      {
            id: 1,
            fundingRequired:200,
            fundingObtained:113,
            minimumFundingAmount:20,
            noOfDonors:15,
            fundingEndTimeStamp:1523008010123
        },
        {
            id: 2,
            fundingRequired:230,
            fundingObtained:50,
            minimumFundingAmount:20,
            noOfDonors:19,
            fundingEndTimeStamp:1523526410635
        }
    ])
  })

})
