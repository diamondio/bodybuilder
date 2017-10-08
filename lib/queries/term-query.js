'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extend = require('lodash/extend');

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

exports.default = termQuery;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Construct a Term query.
 *
 * @memberof Queries
 *
 * @param  {String} field Field name to query over.
 * @param  {String} term  Query value.
 * @return {Object}       Term query.
 */
function termQuery(field, term) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if ((0, _isEmpty2.default)(opts)) {
    return {
      term: _defineProperty({}, field, term)
    };
  }

  var retval = {
    term: _defineProperty({}, field, {
      value: term
    })
  };
  (0, _extend2.default)(retval.term[field], opts);
  return retval;
}