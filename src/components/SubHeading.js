"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _emotion = require("emotion");

var _experience = _interopRequireDefault(require("../styles/sub-heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubHeading = function SubHeading(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _experience.default : _props$themeStyle,
      _props$customStyle = props.customStyle,
      customStyle = _props$customStyle === void 0 ? '' : _props$customStyle;
  return _react.default.createElement("div", {
    className: (0, _emotion.cx)(themeStyle, customStyle),
  },_react.default.createElement("div", {className: "bottomed"}, 
    _react.default.createElement("span", {className: "company"}, props.name), 
    _react.default.createElement("span", {className: "location"}, props.location),
    _react.default.createElement("p", {className: "clear"}, null) 
)
  );
};

SubHeading.propTypes = {
  themeStyle: _propTypes.default.string,
  customStyle: _propTypes.default.string
};
var _default = SubHeading;
exports.default = _default;