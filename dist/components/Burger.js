"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Navbar = _interopRequireDefault(require("./Navbar"));

require("./styles/burger.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Burger = _ref => {
  let {
    links,
    navbarMarginTop,
    navbarBckg = "whitesmoke",
    activeLinkBckg = "lightgray",
    linkTextColor = "black"
  } = _ref;
  const [moveBurger, setMoveBurger] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "burger-wrapper",
    onClick: () => setMoveBurger(!moveBurger)
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
    links: links,
    visible: moveBurger,
    close: setMoveBurger,
    navbarMarginTop: navbarMarginTop,
    navbarBckg: navbarBckg,
    activeLinkBckg: activeLinkBckg,
    linkTextColor: linkTextColor
  }));
};

var _default = Burger;
exports.default = _default;