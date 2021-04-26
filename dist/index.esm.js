import React, { createContext, Component, useContext } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var initialState = {
    data: [],
    columns: [],
    actions: [],
    filters: [],
    pagination: {
        page: 1,
        pageSize: 10,
        total: 0,
    },
};
var DataTableContext = createContext(initialState);
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: [],
            actions: props.actions,
            columns: props.columns,
            filters: props.filters,
            pagination: props.pagination,
        };
        _this.provider = props.provider;
        _this.loadData = _this.loadData.bind(_this);
        _this.createParams = _this.createParams.bind(_this);
        return _this;
    }
    Provider.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadData();
                return [2 /*return*/];
            });
        });
    };
    Provider.prototype.createParams = function () {
        return {};
    };
    Provider.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Collection provided. No API Call needed
                        if (Array.isArray(this.provider)) {
                            this.setState({ data: this.provider });
                            return [2 /*return*/];
                        }
                        params = this.createParams();
                        return [4 /*yield*/, this.provider.call(params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.render = function () {
        return (React.createElement(DataTableContext.Provider, { value: this.state }, this.props.children));
    };
    return Provider;
}(Component));

var sort = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDQwMS45OTggNDAxLjk5OCI+CiAgPHBhdGggZmlsbD0iI2M5YzljOSIgZD0iTTczLjA5MiAxNjQuNDUyaDI1NS44MTNjNC45NDkgMCA5LjIzMy0xLjgwNyAxMi44NDgtNS40MjQgMy42MTMtMy42MTYgNS40MjctNy44OTggNS40MjctMTIuODQ3cy0xLjgxMy05LjIyOS01LjQyNy0xMi44NUwyMTMuODQ2IDUuNDI0QzIxMC4yMzIgMS44MTIgMjA1Ljk1MSAwIDIwMC45OTkgMHMtOS4yMzMgMS44MTItMTIuODUgNS40MjRMNjAuMjQyIDEzMy4zMzFjLTMuNjE3IDMuNjE3LTUuNDI0IDcuOTAxLTUuNDI0IDEyLjg1IDAgNC45NDggMS44MDcgOS4yMzEgNS40MjQgMTIuODQ3IDMuNjIxIDMuNjE3IDcuOTAyIDUuNDI0IDEyLjg1IDUuNDI0ek0zMjguOTA1IDIzNy41NDlINzMuMDkyYy00Ljk1MiAwLTkuMjMzIDEuODA4LTEyLjg1IDUuNDIxLTMuNjE3IDMuNjE3LTUuNDI0IDcuODk4LTUuNDI0IDEyLjg0N3MxLjgwNyA5LjIzMyA1LjQyNCAxMi44NDhMMTg4LjE0OSAzOTYuNTdjMy42MjEgMy42MTcgNy45MDIgNS40MjggMTIuODUgNS40MjhzOS4yMzMtMS44MTEgMTIuODQ3LTUuNDI4bDEyNy45MDctMTI3LjkwNmMzLjYxMy0zLjYxNCA1LjQyNy03Ljg5OCA1LjQyNy0xMi44NDggMC00Ljk0OC0xLjgxMy05LjIyOS01LjQyNy0xMi44NDctMy42MTQtMy42MTYtNy44OTktNS40Mi0xMi44NDgtNS40MnoiLz4KPC9zdmc+';

function mapColumnsToCells(columns) {
    return columns.map(function (column, idx) { return (React.createElement("th", { key: column.label + "." + idx },
        column.label,
        column.sortable && React.createElement("img", { src: sort }))); });
}
function TableHead() {
    var _a = useContext(DataTableContext), columns = _a.columns, actions = _a.actions;
    return (React.createElement("thead", null,
        React.createElement("tr", null,
            mapColumnsToCells(columns),
            actions && React.createElement("th", null, "Actions"))));
}

function parseAccessor (accessor, row) {
    if (typeof accessor === 'function') {
        return accessor(row);
    }
    else {
        return accessor
            .split('.')
            .reduce(function (acc, property, idx, arr) {
            if (Object.hasOwnProperty.call(acc, property)) {
                return acc[property];
            }
            else {
                console.error("Accessor " + accessor + " did not return any data");
                arr.splice(1);
                return null;
            }
        }, row);
    }
}

function mapColumnsToRows(columns, data) {
    return data.map(function (row, rowIdx) { return (React.createElement("tr", { key: rowIdx }, columns.map(function (column, columnIdx) {
        var accessor = column.accessor;
        var data = parseAccessor(accessor, row);
        return React.createElement("td", { key: rowIdx + "." + columnIdx }, data);
    }))); });
}
function TableBody() {
    var _a = useContext(DataTableContext), data = _a.data, columns = _a.columns;
    return React.createElement("tbody", null, mapColumnsToRows(columns, data));
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

var css_248z = ".DataTable-module_DataTable__3YT8h {\n  width: 100%; }\n  .DataTable-module_DataTableWrapper__gKnfU {\n    width: 100%; }\n";
var styles = {"DataTable":"DataTable-module_DataTable__3YT8h","DataTableWrapper":"DataTable-module_DataTableWrapper__gKnfU"};
styleInject(css_248z);

function DataTable(_a) {
    var actions = _a.actions, pagination = _a.pagination, columns = _a.columns, filters = _a.filters, provider = _a.provider;
    return (React.createElement(Provider, { actions: actions, columns: columns, filters: filters, pagination: pagination, provider: provider },
        React.createElement("div", { className: styles.DataTableWrapper },
            React.createElement("table", { className: styles.DataTable },
                React.createElement(TableHead, null),
                React.createElement(TableBody, null),
                React.createElement(TableFoot, null)),
            pagination && React.createElement(Pagination, null))));
}

export { DataTable };
