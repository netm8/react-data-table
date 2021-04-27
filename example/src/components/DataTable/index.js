/* eslint-disable */
import React, { createContext, Component, useContext } from 'react';
import deepEqual from 'deep-equal';
import cs from 'classnames';

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var initialState = {
    data: [],
    columns: [],
    actions: [],
    appliedFilters: [],
    filters: [],
    pagination: {
        page: 1,
        pageSize: 100,
        pagesCount: 0,
        total: 0,
    },
    handlers: {
        setPage: function () { },
        setFilters: function () { },
    },
};
var DataTableContext = createContext(initialState);
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider(props) {
        var _this = _super.call(this, props) || this;
        _this.loadData = _this.loadData.bind(_this);
        _this.createParams = _this.createParams.bind(_this);
        _this.setFilters = _this.setFilters.bind(_this);
        _this.setPage = _this.setPage.bind(_this);
        _this.state = {
            data: [],
            appliedFilters: [],
            filters: props.filters,
            actions: props.actions,
            columns: props.columns,
            pagination: props.pagination,
            handlers: {
                setPage: _this.setPage,
                setFilters: _this.setFilters,
            },
        };
        _this.provider = props.provider;
        return _this;
    }
    Provider.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a.sent();
                        console.error('Failed to fetch data');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.componentDidUpdate = function (prevProps, prevState) {
        return __awaiter(this, void 0, void 0, function () {
            var hasFiltersChanged;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        hasFiltersChanged = !deepEqual(prevState.appliedFilters, this.state.appliedFilters) ||
                            !deepEqual(prevState.pagination, this.state.pagination);
                        if (!hasFiltersChanged)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.sent();
                        window.scrollTo(0, 0);
                        return [3 /*break*/, 3];
                    case 2:
                        _a.sent();
                        console.error('Failed to fetch data');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.createParams = function () {
        // To be implemented
        // const filters = this.state.filters?.reduce((params, filter) => {}, {})
        var _a, _b;
        return {
            page: ((_a = this.state.pagination) === null || _a === void 0 ? void 0 : _a.page) || 1,
            pageSize: ((_b = this.state.pagination) === null || _b === void 0 ? void 0 : _b.pageSize) || 20,
        };
    };
    Provider.prototype.setPage = function (page) {
        if (!this.state.pagination)
            return;
        this.setState({
            pagination: __assign(__assign({}, this.state.pagination), { page: page }),
        });
    };
    Provider.prototype.setFilters = function (filters) { };
    Provider.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
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
                        response = _a.sent();
                        this.setState({
                            data: parseAccessor(this.provider.dataPath, response),
                            pagination: parseAccessor(this.provider.paginationPath, response),
                        });
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

var css_248z$3 = ".TableHead-module_TableHeadCell__6tJMl {\n  text-align: left;\n  padding: 12px 0;\n  border-bottom: 2px solid #e2e2e2; }\n";
var styles$3 = {"TableHeadCell":"TableHead-module_TableHeadCell__6tJMl"};
styleInject(css_248z$3);

var sort = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDQwMS45OTggNDAxLjk5OCI+CiAgPHBhdGggZmlsbD0iI2M5YzljOSIgZD0iTTczLjA5MiAxNjQuNDUyaDI1NS44MTNjNC45NDkgMCA5LjIzMy0xLjgwNyAxMi44NDgtNS40MjQgMy42MTMtMy42MTYgNS40MjctNy44OTggNS40MjctMTIuODQ3cy0xLjgxMy05LjIyOS01LjQyNy0xMi44NUwyMTMuODQ2IDUuNDI0QzIxMC4yMzIgMS44MTIgMjA1Ljk1MSAwIDIwMC45OTkgMHMtOS4yMzMgMS44MTItMTIuODUgNS40MjRMNjAuMjQyIDEzMy4zMzFjLTMuNjE3IDMuNjE3LTUuNDI0IDcuOTAxLTUuNDI0IDEyLjg1IDAgNC45NDggMS44MDcgOS4yMzEgNS40MjQgMTIuODQ3IDMuNjIxIDMuNjE3IDcuOTAyIDUuNDI0IDEyLjg1IDUuNDI0ek0zMjguOTA1IDIzNy41NDlINzMuMDkyYy00Ljk1MiAwLTkuMjMzIDEuODA4LTEyLjg1IDUuNDIxLTMuNjE3IDMuNjE3LTUuNDI0IDcuODk4LTUuNDI0IDEyLjg0N3MxLjgwNyA5LjIzMyA1LjQyNCAxMi44NDhMMTg4LjE0OSAzOTYuNTdjMy42MjEgMy42MTcgNy45MDIgNS40MjggMTIuODUgNS40MjhzOS4yMzMtMS44MTEgMTIuODQ3LTUuNDI4bDEyNy45MDctMTI3LjkwNmMzLjYxMy0zLjYxNCA1LjQyNy03Ljg5OCA1LjQyNy0xMi44NDggMC00Ljk0OC0xLjgxMy05LjIyOS01LjQyNy0xMi44NDctMy42MTQtMy42MTYtNy44OTktNS40Mi0xMi44NDgtNS40MnoiLz4KPC9zdmc+';

function mapColumnsToCells(columns) {
    return columns.map(function (column, idx) { return (React.createElement("th", { className: styles$3.TableHeadCell, key: column.label + "." + idx },
        column.ordinal ? '#' : column.label,
        column.sortable && React.createElement("img", { src: sort }))); });
}
function TableHead() {
    var _a = useContext(DataTableContext), columns = _a.columns, actions = _a.actions;
    return (React.createElement("thead", null,
        React.createElement("tr", null,
            mapColumnsToCells(columns),
            actions && React.createElement("th", { className: styles$3.TableHeadCell }, "Actions"))));
}

var css_248z$2 = ".TableBody-module_TableBodyCell__gC939 {\n  padding: 8px 0;\n  border-bottom: 1px solid #e2e2e2; }\n";
var styles$2 = {"TableBodyCell":"TableBody-module_TableBodyCell__gC939"};
styleInject(css_248z$2);

function mapColumnsToRows(columns, data, actions) {
    return data.map(function (row, rowIdx) { return (React.createElement("tr", { key: rowIdx },
        columns.map(function (column, columnIdx) {
            var accessor = column.accessor;
            var data = parseAccessor(accessor, row);
            return (React.createElement("td", { className: styles$2.TableBodyCell, key: rowIdx + "." + columnIdx }, data));
        }),
        actions && React.createElement("td", { className: styles$2.TableBodyCell }))); });
}
function TableBody() {
    var _a = useContext(DataTableContext), data = _a.data, columns = _a.columns, actions = _a.actions;
    return React.createElement("tbody", null, mapColumnsToRows(columns, data, actions));
}

function TableFoot(_a) {
    return (React.createElement("tfoot", null));
}

var css_248z$1 = ".Pagination-module_Pagination__1RwJN {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 12px;\n  margin: 12px 0;\n  padding: 0; }\n  .Pagination-module_PaginationItem__XT5RR {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n    border: #e2e2e2 1px solid;\n    font-size: 12px;\n    margin: 0 6px;\n    cursor: pointer; }\n  .Pagination-module_PaginationItemActive__1-E77 {\n    background-color: #e2e2e2; }\n  .Pagination-module_PaginationItemSeparator__1L6y5 {\n    border: none; }\n  .Pagination-module_PaginationSeparator__xByMU {\n    padding: 0 20px; }\n";
var styles$1 = {"Pagination":"Pagination-module_Pagination__1RwJN","PaginationItem":"Pagination-module_PaginationItem__XT5RR","PaginationItemActive":"Pagination-module_PaginationItemActive__1-E77","PaginationItemSeparator":"Pagination-module_PaginationItemSeparator__1L6y5","PaginationSeparator":"Pagination-module_PaginationSeparator__xByMU"};
styleInject(css_248z$1);

var range = function (start, end) {
    return Array.from(Array(end - start + 1), function (_, i) { return i + start; });
};
var getPageList = function (totalPages, page, maxLength) {
    if (maxLength < 5)
        throw 'maxLength must be at least 5';
    var sideWidth = maxLength < 9 ? 1 : 4;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }
    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }
    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
};
var Pagination = function (_a) {
    var onChange = _a.onChange, page = _a.page, pagesCount = _a.pagesCount;
    return (React.createElement("ul", { className: styles$1.Pagination }, getPageList(pagesCount, page, 20).map(function (number) {
        var _a;
        return (React.createElement("li", { className: cs(styles$1.PaginationItem, (_a = {},
                _a[styles$1.PaginationItemActive] = page === number,
                _a[styles$1.PaginationItemSeparator] = number === 0,
                _a)), onClick: function () { return onChange(number); }, key: number }, number ? number : '...'));
    })));
};

var css_248z = ".DataTable-module_DataTable__3YT8h {\n  width: 100%; }\n  .DataTable-module_DataTableWrapper__gKnfU {\n    width: 100%; }\n";
var styles = {"DataTable":"DataTable-module_DataTable__3YT8h","DataTableWrapper":"DataTable-module_DataTableWrapper__gKnfU"};
styleInject(css_248z);

function DataTable() {
    var _a = useContext(DataTableContext), pagination = _a.pagination, handlers = _a.handlers;
    return (React.createElement("div", { className: styles.DataTableWrapper },
        React.createElement("table", { className: styles.DataTable },
            React.createElement(TableHead, null),
            React.createElement(TableBody, null),
            React.createElement(TableFoot, null)),
        pagination && (React.createElement(Pagination, { page: pagination.page, pagesCount: pagination.pagesCount, onChange: handlers.setPage }))));
}

function index (_a) {
    var actions = _a.actions, pagination = _a.pagination, columns = _a.columns, filters = _a.filters, provider = _a.provider;
    return (React.createElement(Provider, { actions: actions, columns: columns, filters: filters, pagination: pagination, provider: provider },
        React.createElement(DataTable, null)));
}

export { index as DataTable };
