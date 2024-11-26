"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CircularProgress: true
};
Object.defineProperty(exports, "CircularProgress", {
  enumerable: true,
  get: function get() {
    return _CircularProgress["default"];
  }
});
var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));
var _circularProgressClasses = require("./circularProgressClasses");
Object.keys(_circularProgressClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _circularProgressClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _circularProgressClasses[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }