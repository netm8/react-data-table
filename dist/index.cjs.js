'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function mapColumnsToCells(columns) {
    return columns.map(function (column) { return (React__default['default'].createElement("th", null, column.label)); });
}
function TableHead(_a) {
    var columns = _a.columns;
    return (React__default['default'].createElement("thead", null, mapColumnsToCells(columns)));
}

function TableBody(_a) {
    return (React__default['default'].createElement("tbody", null));
}

function TableFoot(_a) {
    return (React__default['default'].createElement("tfoot", null));
}

var Pagination = function () {
    return (React__default['default'].createElement("ul", null));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".DataTable-module_DataTableWrapper__gKnfU {\n  width: 100%;\n  border: 1px solid #000; }\n";
var styles = {"DataTableWrapper":"DataTable-module_DataTableWrapper__gKnfU"};
styleInject(css_248z);

function DataTable(_a) {
    _a.actions; var pagination = _a.pagination, columns = _a.columns;
    return (React__default['default'].createElement("div", { className: styles.DataTableWrapper },
        React__default['default'].createElement("table", null,
            React__default['default'].createElement(TableHead, { columns: columns }),
            React__default['default'].createElement(TableBody, null),
            React__default['default'].createElement(TableFoot, null)),
        pagination && React__default['default'].createElement(Pagination, null)));
}

exports.DataTable = DataTable;
