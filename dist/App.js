"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _passwordStrMeter = _interopRequireDefault(require("./components/passwordStrMeter/passwordStrMeter"));
var _carousel = _interopRequireDefault(require("./components/carousel/carousel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  const sampleImages = ['/imgs/1.png', '/imgs/2.jpeg', '/imgs/3.png', '/imgs/4.png'];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Mini-SDK"), /*#__PURE__*/_react.default.createElement("h2", null, "Password Strength Meter"), /*#__PURE__*/_react.default.createElement(_passwordStrMeter.default, null), /*#__PURE__*/_react.default.createElement("h2", null, "Image Carousel"), /*#__PURE__*/_react.default.createElement(_carousel.default, {
    images: sampleImages
  }));
}
var _default = exports.default = App;