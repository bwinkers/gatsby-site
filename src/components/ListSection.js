"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _moment = require("moment");

var _gatsby = require("gatsby");

var _emotion = require("emotion");

var _experience = _interopRequireDefault(require("../styles/list-section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSection = function ListSection(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _experience.default : _props$themeStyle,
      _props$customStyle = props.customStyle,
      customStyle = _props$customStyle === void 0 ? '' : _props$customStyle;
  return _react.default.createElement("div", {
    className: (0, _emotion.cx)(themeStyle, customStyle)
  },  _react.default.createElement("h3", null, props.name)
   ,  _react.default.createElement("ul", null,
        props.data.map(item => {
           return _react.default.createElement("li", null, item)
        })
        
    )
);
};

ListSection.propTypes = {
  themeStyle: _propTypes.default.string,
  customStyle: _propTypes.default.string
};
var _default = ListSection;
exports.default = _default;