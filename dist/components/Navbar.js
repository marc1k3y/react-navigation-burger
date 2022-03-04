"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./styles/navbar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Navbar = _ref => {
  let {
    links
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-wrapper"
  }, links.map((link, index) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    key: index,
    to: link.to
  }, link.title)));
};

var _default = Navbar;
exports.default = _default;