import _ from 'lodash'

/**
 * Construct a Term query.
 *
 * @memberof Queries
 *
 * @param  {String} field Field name to query over.
 * @param  {String} term  Query value.
 * @return {Object}       Term query.
 */
export default function termQuery(field, term, opts={}) {
  if (_.isEmpty(opts)) {
    return {
      term: {
        [field]: term
      }
    }
  }

  var retval = {
    term: {
      [field]: {
        value: term
      }
    }
  }
  _.extend(retval.term[field], opts)
  return retval
}
