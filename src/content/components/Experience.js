"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _emotion = require("emotion");

var _moment = require("moment");

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
    return _react.default.createElement("li", {
      key: item.slug
    }, _react.default.createElement(_gatsby.Link, {
      to: '/experience/' + item.slug
    }, _react.default.createElement("h3", null, item.title),
    _react.default.createElement("div", {style: {display:"flex", height:"100%"}}, 
      _react.default.createElement("span", {style: { float:"left", "font-size": "1.2em", "font-weight": "bold", "align-self": "flex-end"}}, item.name),

      _react.default.createElement("span", {style: {"align-self": "flex-end","margin-left": "auto", "font-size": "1.1em"}}, item.location),
      _react.default.createElement("span", {style: { "margin-left": "auto",  "align-self": "flex-end", "font-weight": "bold"}}, _moment(item.start, 'YYYY-MM-DD').format('MMM YYYY') + ' to ' + _moment(item.end, 'YYYY-MM-DD').format('MMM YYYY')),
      _react.default.createElement("p", {style: { clear:"both"}}, null)
  )),
    _react.default.createElement("div", {style: { "font-size": "1.2em", "margin-top": "5px"}}, item.description)
  );
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