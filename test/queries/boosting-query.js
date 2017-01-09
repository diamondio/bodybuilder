import boostingQuery from '../../src/queries/boosting-query'
import {expect} from 'chai'

describe('boostingQuery', () => {

  it('should create a boosting query', () => {
    let positive = { term: { field1: 'value1' } }
    let negative = { term: { field2: 'value2' } }
    let boost = 0.2
    let result = boostingQuery(positive, negative, boost)
    expect(result).to.eql({
      boosting: {
        positive,
        negative,
        negative_boost: boost
      }
    })
  })

})
