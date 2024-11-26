"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CircularWrapper = (0, _styled["default"])("div")(function (_ref) {
  var size = _ref.size,
    thickness = _ref.thickness;
  return {
    display: "inline-block",
    position: "relative",
    width: size,
    height: size,
    "&::before": {
      content: '""',
      display: "block",
      paddingBottom: "100%"
    }
  };
});
var Circle = (0, _styled["default"])("circle")(function (_ref2) {
  var _theme$palette;
  var color = _ref2.color,
    theme = _ref2.theme;
  return {
    stroke: (theme === null || theme === void 0 || (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette[color]) === null || _theme$palette === void 0 ? void 0 : _theme$palette.main) || color,
    strokeLinecap: "round"
  };
});
function CircularProgress(_ref3) {
  var _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 40 : _ref3$size,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "primary" : _ref3$color,
    _ref3$thickness = _ref3.thickness,
    thickness = _ref3$thickness === void 0 ? 3.6 : _ref3$thickness,
    _ref3$value = _ref3.value,
    value = _ref3$value === void 0 ? 0 : _ref3$value,
    _ref3$variant = _ref3.variant,
    variant = _ref3$variant === void 0 ? "indeterminate" : _ref3$variant,
    sx = _ref3.sx,
    _ref3$disableShrink = _ref3.disableShrink,
    disableShrink = _ref3$disableShrink === void 0 ? false : _ref3$disableShrink;
  var circleStyle = variant === "determinate" ? {
    strokeDasharray: "100, 100",
    strokeDashoffset: "".concat(100 - value, "%")
  } : undefined;
  return /*#__PURE__*/_react["default"].createElement(CircularWrapper, {
    size: typeof size === "number" ? "".concat(size, "px") : size,
    thickness: thickness
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    viewBox: "22 22 44 44",
    style: _objectSpread({
      transform: disableShrink ? "none" : "rotate(0.5turn)"
    }, sx)
  }, /*#__PURE__*/_react["default"].createElement(Circle, {
    cx: "44",
    cy: "44",
    r: "20",
    strokeWidth: thickness,
    style: circleStyle,
    color: color
  })));
}
var _default = exports["default"] = CircularProgress;