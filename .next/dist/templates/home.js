'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _homeStyle = require('../styles/home-style');

var _homeStyle2 = _interopRequireDefault(_homeStyle);

var _MyLayout = require('../partials/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rohit/contentstack-nextjs-react-universal-demo/templates/home.js';


var home = function (_React$Component) {
    (0, _inherits3.default)(home, _React$Component);

    function home() {
        (0, _classCallCheck3.default)(this, home);

        return (0, _possibleConstructorReturn3.default)(this, (home.__proto__ || (0, _getPrototypeOf2.default)(home)).apply(this, arguments));
    }

    (0, _createClass3.default)(home, [{
        key: 'render',
        value: function render() {
            var page = this.props.page[0];
            var header = page.reference_header[0];
            var footer = page.reference_footer[0];

            var nav = header.nav_menu.link.map(function (item, index) {
                return _react2.default.createElement('a', { href: item.href, key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14
                    }
                }, item.title);
            });

            var footerNav = footer.nav_links.link.map(function (item, index) {
                return _react2.default.createElement('a', { href: item.href, key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, item.title);
            });

            var socialShare = footer.social_share.map(function (item, index) {
                return _react2.default.createElement('li', { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('a', { href: item.link.href, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                }, _react2.default.createElement('i', { className: 'fa ' + item.icon_class, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                    }
                })));
            });

            var herobanner = page.hero_banner.map(function (item, index) {
                return _react2.default.createElement('div', { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _react2.default.createElement('ul', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, _react2.default.createElement('img', { className: 'fullwidth', src: item.image.url, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }), _react2.default.createElement('div', { className: 'banner-content', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, _react2.default.createElement('h1', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, item.title), _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, item.description)))));
            });
            var section_heading = page.section_heading.heading.map(function (heading, index) {
                return _react2.default.createElement('div', { key: index, className: 'port-bx clearfix', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, _react2.default.createElement('div', { className: 'image', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, _react2.default.createElement('i', { className: "fa " + heading.fontawesome_icon, 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                })), _react2.default.createElement('div', { className: 'px-desc', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    }
                }, _react2.default.createElement('h3', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                    }
                }, heading.title), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    }
                }, heading.description)));
            });
            return _react2.default.createElement(_MyLayout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _homeStyle2.default }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement('header', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('a', { className: 'logo', href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('img', { className: '', src: header.logo_image.url, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement('nav', { className: 'nav-menu', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, nav)), _react2.default.createElement('div', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('main', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('div', { id: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', { className: 'hero-banner', id: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, herobanner), _react2.default.createElement('div', { className: 'portpolio clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('div', { className: 'container clearfix', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, page.section_heading.title), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, page.section_heading.description), section_heading)))))), _react2.default.createElement('footer', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('div', { className: 'links', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, footerNav), _react2.default.createElement('div', { className: 's-share', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('ul', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, socialShare)), _react2.default.createElement('div', { className: 'copywrite', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: footer.copywrite }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }))));
        }
    }]);

    return home;
}(_react2.default.Component);

exports.default = home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ob21lLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiaG9tZXN0eWxlIiwiTGF5b3V0IiwiaG9tZSIsInBhZ2UiLCJwcm9wcyIsImhlYWRlciIsInJlZmVyZW5jZV9oZWFkZXIiLCJmb290ZXIiLCJyZWZlcmVuY2VfZm9vdGVyIiwibmF2IiwibmF2X21lbnUiLCJsaW5rIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsInRpdGxlIiwiZm9vdGVyTmF2IiwibmF2X2xpbmtzIiwic29jaWFsU2hhcmUiLCJzb2NpYWxfc2hhcmUiLCJpY29uX2NsYXNzIiwiaGVyb2Jhbm5lciIsImhlcm9fYmFubmVyIiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInNlY3Rpb25faGVhZGluZyIsImhlYWRpbmciLCJmb250YXdlc29tZV9pY29uIiwiX19odG1sIiwibG9nb19pbWFnZSIsImNvcHl3cml0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRUUsQTs7Ozs7Ozs7Ozs7aUNBRVIsQUFDTDtnQkFBTSxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBeEIsQUFBYSxBQUFnQixBQUM3QjtnQkFBTSxTQUFTLEtBQUEsQUFBSyxpQkFBcEIsQUFBZSxBQUFzQixBQUNyQztnQkFBTSxTQUFTLEtBQUEsQUFBSyxpQkFBcEIsQUFBZSxBQUFzQixBQUVyQzs7Z0JBQU0sYUFBTSxBQUFPLFNBQVAsQUFBZ0IsS0FBaEIsQUFBcUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDbkQ7dUNBQ0csY0FBQSxPQUFHLE1BQU0sS0FBVCxBQUFjLE1BQU0sS0FBcEIsQUFBeUI7a0NBQXpCO29DQUFBLEFBQWlDO0FBQWpDO2lCQUFBLE9BREgsQUFDRyxBQUFzQyxBQUUzQztBQUpELEFBQVksQUFNWixhQU5ZOztn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