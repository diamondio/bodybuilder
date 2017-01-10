import _ from 'lodash'

/**
 * Construct a Match Phrase query.
 *
 * @memberof Queries
 *
 * @param  {String} field Field name to query over.
 * @param  {String} term  Query value.
 * @param  {Object} opts  See https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query-phrase.html for available options
 * @return {Object}       Match query.
 */
export default function matchPhraseQuery(field, term, opts = {}) {
  if (_.isEmpty(opts)) {
    return {
      match_phrase: {
        [field]: term
      }
    }
  } else {
    opts.query = term

    return {
      match_phrase: {
        [field]: opts
      }
    }
  }
}
