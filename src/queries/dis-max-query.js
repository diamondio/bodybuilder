import {assign} from 'lodash'

const defaultOptions = {
}

/**
 * Construct a DisMax query.
 *
 * @memberof Queries
 *
 * @param  {Array}  queries   Array of fully-formed queries.
 * @param  {Object} options   See docs for possible options https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html
 * @return {Object}           DisMax query.
 */
export default function dismaxQuery(queries, options = defaultOptions) {
  return {
    dis_max: assign({ queries }, options)
  }
}
