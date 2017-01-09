/**
 * Construct a Boosting query.
 *
 * @private
 * @memberof Queries
 *
 * @param  {Object} postive         Fully-formed query.
 * @param  {Object} negative        Fully-formed query.
 * @param  {Number} negativeBoost  
 * @return {Object}                 Boosting query.
 */
export default function boostingQuery(positive, negative, negativeBoost) {
  return {
    boosting: {
      positive,
      negative,
      negative_boost: negativeBoost
    }
  }
}
