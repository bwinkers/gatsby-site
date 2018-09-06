"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n div {\n    display: flex; \n height: 100%; \n }\n\n .company {\n  float: left; \n font-size: 1.6em;  \n align-self: flex-end; \n }\n\n  .location {\n  margin-left: auto; \n font-size: 1.4em;  \n align-self: flex-end; \n }\n\n .clear {\n    clear: left; \n  }\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var subHeadingStyle = (0, _emotion.css)(_templateObject());
var _default = subHeadingStyle;
exports.default = _default;