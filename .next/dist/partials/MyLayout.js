"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement("div", { id: "asdf4534", className: "jsx-2940544217"
  }, _react2.default.createElement("div", {
    className: "jsx-2940544217"
  }, _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", {
    className: "jsx-2940544217"
  }, "CS Nextjs Website"), _react2.default.createElement("link", { type: "text/css", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600", rel: "stylesheet", className: "jsx-2940544217"
  }), _react2.default.createElement("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css", type: "text/css", rel: "stylesheet", className: "jsx-2940544217"
  }))), props.children, _react2.default.createElement(_style2.default, {
    styleId: "2940544217",
    css: ["body.jsx-2940544217{font-family:'Open Sans',sans-serif;}", "#asdf4534.jsx-2940544217{width:100%;margin:0 auto;}"]
  }));
};

exports.default = Layout;