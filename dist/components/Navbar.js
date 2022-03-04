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
    links,
    visible,
    close,
    navbarBckg,
    activeLinkBckg,
    linkTextColor
  } = _ref;
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-wrapper",
    style: {
      display: visible ? "flex" : "none",
      backgroundColor: navbarBckg
    }
  }, links.map((link, index) => /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    style: {
      backgroundColor: pathname === link.to && activeLinkBckg,
      color: linkTextColor
    },
    onClick: () => close(false),
    key: index,
    to: link.to
  }, link.title)));
};

var _default = Navbar;
exports.default = _default;