import boolQuery from './bool-query'
import boostingQuery from './boosting-query'
import dismaxQuery from './dis-max-query'
import fuzzyQuery from './fuzzy-query'
import matchQuery from './match-query'
import matchPhraseQuery from './match-phrase-query'
import multiMatchQuery from './multi-match-query'
import queryStringQuery from './query-string-query'
import rangeQuery from './range-query'
import termQuery from './term-query'
import termsQuery from './terms-query'
import functionScoreQuery from './function-score-query'
import typeQuery from './type-query'

/**
 * Construct elasticsearch queries.
 *
 * @namespace Queries
 *
 * @example
 * var body = new Bodybuilder()
 *   .query('query_string', 'this AND that')
 *   .build()
 */
export default {
  bool: boolQuery,
  boolean: boolQuery,
  boosting: boostingQuery,
  dis_max: dismaxQuery,
  fuzzy: fuzzyQuery,
  match: matchQuery,
  match_phrase: matchPhraseQuery,
  matchPhrase: matchPhraseQuery,
  multi_match: multiMatchQuery,
  multiMatch: multiMatchQuery,
  query_string: queryStringQuery,
  'query-string': queryStringQuery,
  queryString: queryStringQuery,
  range: rangeQuery,
  term: termQuery,
  terms: termsQuery,
  function_score: functionScoreQuery,
  functionScore: functionScoreQuery,
  type: typeQuery
}
