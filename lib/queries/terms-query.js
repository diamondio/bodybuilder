'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = require('lodash/extend');

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

exports.default = termsQuery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Construct a Terms query.
 *
 * @memberof Queries
 *
 * @param  {String}  field       Field name to query over.
 * @param  {Array}   terms       Array of query terms.
 * @return {Object}              Terms query.
 */
function termsQuery(field, terms) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isEmpty2.default)(opts)) {
    return {
      terms: _defineProperty({}, field, terms)
    };
  }

  var retval = {
    terms: _defineProperty({}, field, terms)
  };
  (0, _extend2.default)(retval.terms, opts);
  return retval;
}