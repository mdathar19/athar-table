"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@coreui/react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TableDropDown = function TableDropDown(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'All' : _ref$title,
    _ref$activeValue = _ref.activeValue,
    activeValue = _ref$activeValue === void 0 ? '' : _ref$activeValue,
    _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    queryIndex = _ref.queryIndex,
    updateQueryParams = _ref.updateQueryParams;
  return /*#__PURE__*/_react["default"].createElement(_react2.CDropdown, {
    alignment: "start",
    direction: "dropend"
  }, /*#__PURE__*/_react["default"].createElement(_react2.CDropdownToggle, {
    color: "primary"
  }, title), /*#__PURE__*/_react["default"].createElement(_react2.CDropdownMenu, null, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react2.CDropdownItem, {
      style: {
        cursor: 'pointer'
      },
      key: "dropdown-".concat(title, "-").concat(index),
      active: activeValue === item.value,
      onClick: function onClick() {
        return updateQueryParams(item.value);
      }
    }, item.title);
  })));
};
var _default = exports["default"] = TableDropDown;