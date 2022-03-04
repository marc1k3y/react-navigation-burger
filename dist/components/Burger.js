"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

require("./styles/burger.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Burger = _ref => {
  let {
    links
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "burger-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "top-bun",
    style: {
      marginBottom: moveBurger && "3px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cheese",
    style: {
      display: moveBurger ? "flex" : "none"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "middle",
    style: {
      marginTop: moveBurger && "3px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "bot-bun",
    style: {
      marginTop: moveBurger && "3px"
    }
  })), /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    links: links
  }));
};

var _default = Burger;
exports.default = _default;