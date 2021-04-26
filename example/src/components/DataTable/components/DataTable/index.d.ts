export declare type DataTableAccessorFn<T> = (row: T) => string;
export declare type DataTableAccessor<T> = string | DataTableAccessorFn<T>;
export declare type DataTableColumn<T> = {
    label: string | JSX.Element;
    accessor: DataTableAccessor<T>;
    ordinal?: boolean;
    sortable?: boolean;
};
export declare type DataTableFilter = {
    column: string;
    operator: string;
    value: string | number;
};
export declare type DataTableAction<T> = {
    icon: string | JSX.Element;
    href?: DataTableAccessor<T>;
    onClick?(): void;
};
export declare type DataTablePagination = {
    page: number;
    pageSize: number;
    total: number;
};
export declare type DataTableApiCallParams = {
    [key: string]: string | number;
};
export declare type DataProvider<T> = {
    call: (params: DataTableApiCallParams) => Promise<T>;
    dataPath: string;
    paginationPath: string;
};
export interface IDataTable<T> {
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    filters?: DataTableFilter[];
    pagination?: DataTablePagination;
    provider: T[] | DataProvider<T>;
}
export declare function DataTable<T>({ actions, pagination, columns, filters, provider, }: IDataTable<T>): JSX.Element;
