"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _emotion = require("emotion");

var _experience = _interopRequireDefault(require("../../styles/experience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Experience = function Experience(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _experience.default : _props$themeStyle,
      _props$customStyle = props.customStyle,
      customStyle = _props$customStyle === void 0 ? '' : _props$customStyle;
  return _react.default.createElement("div", {
    className: (0, _emotion.cx)(themeStyle, customStyle)
  }, _react.default.createElement("ul", null, items.map(function (item) {
      console.log(item)
    return _react.default.createElement("li", {
      key: item.slug
    }, _react.default.createElement(_gatsby.Link, {
      to: '/experience/' + item.slug
    }, _react.default.createElement("h3", null, item.title), _react.default.createElement("p", null, 'excerpt')));
  })));
};

Experience.propTypes = {
  items: _propTypes.default.array.isRequired,
  author: _propTypes.default.string,
  themeStyle: _propTypes.default.string,
  customStyle: _propTypes.default.string,
  metaIcons: _propTypes.default.object
};
var _default = Experience;
exports.default = _default;