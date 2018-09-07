"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral([" margin-top: 1em; ul {\n   list-style-position: outside;    list-style: dot; \n  }\n\n  li {\n     padding: .2em 0 ;\n  }\n\n  h3 {\n    font-size: 1.6em;\n    margin-bottom: 0.20em;\n    line-height: 1.2;\n    letter-spacing: -0.02em;\n  }\n\n  a {\n    text-decoration: none;\n    color: var(--textColor);\n\n    &:hover {\n      color: var(--hoverLinkColor);\n    }\n  }\n\n  p {\n    line-height: 1.4;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var listSectionStyle = (0, _emotion.css)(_templateObject());
var _default = listSectionStyle;
exports.default = _default;