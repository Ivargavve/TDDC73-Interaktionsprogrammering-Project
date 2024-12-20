"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _carouselModule = _interopRequireDefault(require("./carousel.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// tar in array, tom som default
const Carousel = _ref => {
  let {
    images = []
  } = _ref;
  const [currentIndex, setCurrentIndex] = (0, _react.useState)(0); // aktuell bildindex, 0 som default
  console.log(images);
  const nextSlide = () => {
    if (images.length > 0) {
      // om det finns bilder
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }
  };
  const prevSlide = () => {
    if (images.length > 0) {
      setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1); // om index är 0, sätt till sista bilden, annars -1
    }
  };
  if (images.length === 0) {
    return /*#__PURE__*/_react.default.createElement("div", null, "No images to display");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _carouselModule.default.carousel
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: prevSlide,
    className: _carouselModule.default.button
  }, "\u2B05"), /*#__PURE__*/_react.default.createElement("img", {
    src: images[currentIndex],
    alt: "img",
    className: _carouselModule.default.image
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: nextSlide,
    className: _carouselModule.default.button
  }, "\u27A1"));
};
var _default = exports.default = Carousel;