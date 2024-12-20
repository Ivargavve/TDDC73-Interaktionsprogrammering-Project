"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _passwordStrMeterModule = _interopRequireDefault(require("./passwordStrMeter.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PasswordStrengthMeter = () => {
  const [password, setPassword] = (0, _react.useState)('');
  const calculateStrength = password => {
    if (!password) return -1;
    let strength = 0;
    if (password.length > 8) strength++; // Längd > 8 tecken
    if (/[A-Z]/.test(password)) strength++; // Innehåller stora bokstäver
    if (/[0-9]/.test(password)) strength++; // Innehåller siffror
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Innehåller specialtecken
    return strength;
  };
  const strength = calculateStrength(password);
  const getStrengthLabel = () => {
    const labels = ['No Input', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
    return labels[strength + 1]; // +1 för att hantera -1
  };
  const widthPercentage = Math.min(100, Math.max(0, (strength + 1) / 5 * 100));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _passwordStrMeterModule.default.container
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    placeholder: "Enter your password",
    value: password,
    onChange: e => setPassword(e.target.value),
    className: _passwordStrMeterModule.default.input
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _passwordStrMeterModule.default.strengthBar
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_passwordStrMeterModule.default.strength, " ").concat(_passwordStrMeterModule.default["level-".concat(strength)]) // level-0, level-1, level-2, level-3, level-4, level-5
    ,
    style: {
      width: "".concat(widthPercentage, "%")
    } // 0%, 25%, 50%, 75%, 100%
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: _passwordStrMeterModule.default.label
  }, getStrengthLabel()));
};
var _default = exports.default = PasswordStrengthMeter;