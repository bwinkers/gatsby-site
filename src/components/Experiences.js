"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _article = _interopRequireDefault(require("../styles/experiences"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Experiences = function Experiences(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _article.default : _props$themeStyle,
      _props$customStyle = props.customStyle,
      customStyle = _props$customStyle === void 0 ? '' : _props$customStyle;
  return _react.default.createElement("experiences", {
    className: (0, _emotion.cx)(themeStyle, customStyle)
  }, children);
};

Experiences.propTypes = {
  children: _propTypes.default.node.isRequired,
  themeStyle: _propTypes.default.string,
  customStyle: _propTypes.default.string
};
var _default = Experiences;
exports.default = _default;