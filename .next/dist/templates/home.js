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
                return _react2.default.createElement('a', { href: item.href, key: index }, item.title);
            });

            var footerNav = footer.nav_links.link.map(function (item, index) {
                return _react2.default.createElement('a', { href: item.href, key: index }, item.title);
            });

            var socialShare = footer.social_share.map(function (item, index) {
                return _react2.default.createElement('li', { key: index }, _react2.default.createElement('a', { href: item.link.href }, _react2.default.createElement('i', { className: 'fa ' + item.icon_class })));
            });

            var herobanner = page.hero_banner.map(function (item, index) {
                return _react2.default.createElement('div', { key: index }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement('img', { className: 'fullwidth', src: item.image.url }), _react2.default.createElement('div', { className: 'banner-content' }, _react2.default.createElement('h1', null, item.title), _react2.default.createElement('h3', null, item.description)))));
            });
            var section_heading = page.section_heading.heading.map(function (heading, index) {
                return _react2.default.createElement('div', { key: index, className: 'port-bx clearfix' }, _react2.default.createElement('div', { className: 'image' }, _react2.default.createElement('i', { className: "fa " + heading.fontawesome_icon, 'aria-hidden': 'true' })), _react2.default.createElement('div', { className: 'px-desc' }, _react2.default.createElement('h3', null, heading.title), _react2.default.createElement('p', null, heading.description)));
            });
            return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _homeStyle2.default } }), _react2.default.createElement('header', null, _react2.default.createElement('a', { className: 'logo', href: '#' }, _react2.default.createElement('img', { className: '', src: header.logo_image.url })), _react2.default.createElement('nav', { className: 'nav-menu' }, nav)), _react2.default.createElement('div', { className: 'wrapper' }, _react2.default.createElement('main', null, _react2.default.createElement('div', null, _react2.default.createElement('div', { id: '' }, _react2.default.createElement('div', { className: 'hero-banner', id: '' }, herobanner), _react2.default.createElement('div', { className: 'portpolio clearfix' }, _react2.default.createElement('div', { className: 'container clearfix' }, _react2.default.createElement('h1', null, page.section_heading.title), _react2.default.createElement('h2', null, page.section_heading.description), section_heading)))))), _react2.default.createElement('footer', null, _react2.default.createElement('div', { className: 'links' }, footerNav), _react2.default.createElement('div', { className: 's-share' }, _react2.default.createElement('ul', null, socialShare)), _react2.default.createElement('div', { className: 'copywrite' }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: footer.copywrite } }))));
        }
    }]);

    return home;
}(_react2.default.Component);

exports.default = home;