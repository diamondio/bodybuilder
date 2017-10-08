import _ from 'lodash'

/**
 * Construct a Terms query.
 *
 * @memberof Queries
 *
 * @param  {String}  field       Field name to query over.
 * @param  {Array}   terms       Array of query terms.
 * @return {Object}              Terms query.
 */
export default function termsQuery(field, terms, opts={}) {
  if (_.isEmpty(opts)) {
    return {
      terms: {
        [field]: terms
      }
    }
  }

  var retval = {
    terms: {
      [field]: terms
    }
  }
  _.extend(retval.terms, opts)
  return retval
}
