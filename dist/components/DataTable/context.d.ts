import React, { Component } from 'react';
import { DataProvider, DataTableAction, DataTableColumn, DataTableFilter, DataTablePagination } from './DataTable';
interface DataTableContextState<T> {
    data: T[];
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    pagination?: DataTablePagination;
    appliedFilters?: DataTableFilter[];
    filters?: DataTableFilter[];
    handlers: Handlers;
}
interface DataTableProviderProps<T> {
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    pagination?: DataTablePagination;
    filters?: DataTableFilter[];
    provider: T[] | DataProvider;
    children?: React.ReactNode;
}
interface Handlers {
    setPage(page: number): void;
    setFilters(filter: DataTableFilter): void;
}
declare const DataTableContext: React.Context<DataTableContextState<any>>;
export declare class Provider<T> extends Component<DataTableProviderProps<T>, DataTableContextState<T>> {
    private provider;
    constructor(props: DataTableProviderProps<T>);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: DataTableProviderProps<T>, prevState: DataTableContextState<T>): Promise<void>;
    createParams(): Record<string, string | number>;
    setPage(page: number): void;
    setFilters(filters: DataTableFilter): void;
    loadData(): Promise<void>;
    render(): JSX.Element;
}
export default DataTableContext;
