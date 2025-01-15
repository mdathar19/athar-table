"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _iconsReact = _interopRequireDefault(require("@coreui/icons-react"));
var _icons = require("@coreui/icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InfoIconWithTooltip = function InfoIconWithTooltip(_ref) {
  var infoText = _ref.infoText;
  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: infoText,
    arrow: true
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      marginLeft: '8px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement(_iconsReact["default"], {
    icon: _icons.cilInfo,
    size: "sm"
  })));
};
var _default = exports["default"] = InfoIconWithTooltip;