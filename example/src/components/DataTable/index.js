/* eslint-disable */
import React from 'react';

function mapColumnsToCells(columns) {
    return columns.map(function (column) { return (React.createElement("th", null, column.label)); });
}
function TableHead(_a) {
    var columns = _a.columns;
    return (React.createElement("thead", null, mapColumnsToCells(columns)));
}

function TableBody(_a) {
    return (React.createElement("tbody", null));
}

function TableFoot(_a) {
    return (React.createElement("tfoot", null));
}

var Pagination = function () {
    return (React.createElement("ul", null));
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
    return (React.createElement("div", { className: styles.DataTableWrapper },
        React.createElement("table", null,
            React.createElement(TableHead, { columns: columns }),
            React.createElement(TableBody, null),
            React.createElement(TableFoot, null)),
        pagination && React.createElement(Pagination, null)));
}

export { DataTable };
