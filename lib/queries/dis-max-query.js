'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = dismaxQuery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {};

/**
 * Construct a DisMax query.
 *
 * @memberof Queries
 *
 * @param  {Array}  queries   Array of fully-formed queries.
 * @param  {Object} options   See docs for possible options https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-dis-max-query.html
 * @return {Object}           DisMax query.
 */
function dismaxQuery(queries) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  return {
    dis_max: (0, _assign2.default)({ queries: queries }, options)
  };
}