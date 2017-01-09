import dismaxQuery from '../../src/queries/dis-max-query'
import termQuery from '../../src/queries/term-query'
import {expect} from 'chai'

describe('dismaxQuery', () => {

  it('should create a dismax query', () => {
    let queries = [termQuery('age', 34), termQuery('age', 35)]
    let tieBreaker = 0.7
    let boost = 1.2
    let result = dismaxQuery(queries, { tie_breaker: tieBreaker, boost })
    expect(result).to.eql({
      dis_max: {
        tie_breaker: tieBreaker,
        boost,
        queries
      }
    })
  })

})
