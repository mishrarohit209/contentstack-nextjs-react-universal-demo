'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _home = require('../templates/home');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rohit/contentstack-nextjs-react-universal-demo/pages/index.js?entry';


var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      var page = this.props[0];
      return _react2.default.createElement(_home2.default, { page: page, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      });
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = new _promise2.default(function (resolve) {
                  var Query = Stack.ContentType("home").Query().includeReference('reference_header', 'reference_footer').toJSON().find().then(function success(result) {
                    resolve(result);
                  }, function error(error) {});
                });
                return _context.abrupt('return', data);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZXBhZ2UiLCJIb21lIiwicGFnZSIsInByb3BzIiwiZGF0YSIsIlF1ZXJ5IiwiU3RhY2siLCJDb250ZW50VHlwZSIsImluY2x1ZGVSZWZlcmVuY2UiLCJ0b0pTT04iLCJmaW5kIiwidGhlbiIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyZXNvbHZlIiwiZXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7Ozs7Ozs7O0lBQ0EsQTs7Ozs7Ozs7Ozs7NkJBZVQsQUFDUjtVQUFNLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQWEsQUFBVyxBQUN4Qjs2QkFBTyxBQUFDLGdDQUFTLE1BQVYsQUFBZ0I7b0JBQWhCO3NCQUFQLEFBQU8sQUFFUjtBQUZRO09BQUE7Ozs7Ozs7Ozs7bUJBZkM7QSw2Q0FBbUIsbUJBQVcsQUFDaEM7c0JBQUssY0FBUSxBQUFNLFlBQU4sQUFBa0IsUUFBbEIsQUFBMEIsUUFBMUIsQUFDUixpQkFEUSxBQUNTLG9CQURULEFBQzRCLG9CQUQ1QixBQUVSLFNBRlEsQUFHUixPQUhRLEFBSVIsS0FBSyxTQUFBLEFBQVMsUUFBVCxBQUFpQixRQUFRLEFBQzNCOzRCQUFBLEFBQVEsQUFDWDtBQU5RLG1CQUFBLEVBTU4sU0FBQSxBQUFTLE1BQVQsQUFBZSxPQUFPLEFBRXhCLENBUkwsQUFBYSxBQVNoQjtBQVZZLEEsaUJBQUE7aURBV04sQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWJxQixnQkFBTSxBOztrQkFBbkIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9yb2hpdC9jb250ZW50c3RhY2stbmV4dGpzLXJlYWN0LXVuaXZlcnNhbC1kZW1vIn0=