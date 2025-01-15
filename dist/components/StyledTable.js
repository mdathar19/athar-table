"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTable = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react2 = require("@coreui/react");
var _material = require("@mui/material");
var _TableDropDown = _interopRequireDefault(require("./TableDropDown"));
var _InfoIconWithTooltip = _interopRequireDefault(require("./InfoIconWithTooltip"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Card = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 1.5rem;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"])), function (props) {
  return props.theme.cardBackground;
}, function (props) {
  return props.theme.TableHeadertext;
});
var CardHeader = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  padding: 1rem;\n  border-bottom: 1px solid ", ";\n  font-weight: bold;\n"])), function (props) {
  return props.theme.tableHeaderBackground;
}, function (props) {
  return props.theme.text;
});
var Table = _styledComponents["default"].table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-collapse: collapse;\n  background-color: ", ";\n"])), function (props) {
  return props.theme.background;
});
var TableRow = _styledComponents["default"].tr(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: ", ";\n  &:nth-child(even) {\n    background-color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.text;
}, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.tableRowHover;
});
var TableHeaderCell = _styledComponents["default"].th(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 8px;\n  text-align: left;\n  border: 1px solid white;\n  cursor: pointer;\n"])));
var TableDataCell = _styledComponents["default"].td(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 5px;\n  border: 0.1px solid ", ";\n"])), function (props) {
  return props.theme.text;
});
var StyledTable = exports.StyledTable = function StyledTable(_ref) {
  var isFetching = _ref.isFetching,
    tableConfig = _ref.tableConfig,
    updateQueryParams = _ref.updateQueryParams;
  var columns = tableConfig.columns,
    data = tableConfig.data,
    tableName = tableConfig.tableName,
    metaData = tableConfig.metaData;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    sortedColumn = _useState4[0],
    setSortedColumn = _useState4[1];
  var _useState5 = (0, _react.useState)("asc"),
    _useState6 = _slicedToArray(_useState5, 2),
    sortDirection = _useState6[0],
    setSortDirection = _useState6[1];
  var handleSort = function handleSort(column) {
    if (!column.sortable) return;
    var direction = sortedColumn === column.key && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(direction);
    setSortedColumn(column.key);
    var sortedData = _toConsumableArray(data).sort(function (a, b) {
      if (a[column.key] < b[column.key]) return direction === "asc" ? -1 : 1;
      if (a[column.key] > b[column.key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    tableConfig.setData(sortedData);
  };
  var filteredData = data.filter(function (row) {
    return columns.some(function (column) {
      var _row$column$key;
      return (_row$column$key = row[column.key]) === null || _row$column$key === void 0 ? void 0 : _row$column$key.toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Card, null, /*#__PURE__*/_react["default"].createElement(CardHeader, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    alignItems: "center",
    gap: 2
  }, /*#__PURE__*/_react["default"].createElement("h4", null, tableName || "Table"), isFetching && /*#__PURE__*/_react["default"].createElement(_react2.CSpinner, {
    size: "sm",
    color: "white"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_react2.CFormInput, {
    type: "text",
    placeholder: "Search...",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: "1rem",
      overflowX: "auto",
      maxWidth: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(Table, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(TableHeaderCell, {
      key: column.key,
      onClick: function onClick() {
        return handleSort(column);
      }
    }, column.dropdown ? /*#__PURE__*/_react["default"].createElement(_TableDropDown["default"], {
      title: column.name,
      activeValue: column.activeOption || '' // Fallback to empty string if undefined
      ,
      queryIndex: column.key,
      items: column.dropdownList || [],
      updateQueryParams: updateQueryParams
    }) : column.name, sortedColumn === column.key && (sortDirection === "asc" ? " ↑" : " ↓"), column.info && /*#__PURE__*/_react["default"].createElement(_InfoIconWithTooltip["default"], {
      infoText: column.info
    }));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, filteredData.length > 0 ? filteredData.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: rowIndex
    }, columns.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement(TableDataCell, {
        key: column.key
      }, column.render ? column.render(row[column.key], row, rowIndex) : row[column.key] || "NA");
    }));
  }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(TableDataCell, {
    colSpan: columns.length,
    style: {
      textAlign: "center"
    }
  }, "No Data")))))));
};