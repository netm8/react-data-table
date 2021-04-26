import React, { Component } from 'react';
import { DataProvider, DataTableAction, DataTableApiCallParams, DataTableColumn, DataTableFilter, DataTablePagination } from './index';
interface DataTableContextState<T> {
    data: T[];
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    pagination?: DataTablePagination;
    filters?: DataTableFilter[];
}
interface DataTableProviderProps<T> {
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    pagination?: DataTablePagination;
    filters?: DataTableFilter[];
    provider: T[] | DataProvider<T>;
    children?: React.ReactNode;
}
declare const DataTableContext: React.Context<DataTableContextState<any>>;
export declare class Provider<T> extends Component<DataTableProviderProps<T>, DataTableContextState<T>> {
    private provider;
    constructor(props: DataTableProviderProps<T>);
    componentDidMount(): Promise<void>;
    createParams(): DataTableApiCallParams;
    loadData(): Promise<void>;
    render(): JSX.Element;
}
export default DataTableContext;
