"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boostingQuery;
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
function boostingQuery(positive, negative, negativeBoost) {
  return {
    boosting: {
      positive: positive,
      negative: negative,
      negative_boost: negativeBoost
    }
  };
}