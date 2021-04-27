export declare type DataTableAccessorFn<T> = (row: T) => string | JSX.Element;
export declare type DataTableAccessor<T> = string | DataTableAccessorFn<T>;
export declare type DataTableColumn<T> = {
    label: string | JSX.Element;
    accessor: DataTableAccessor<T>;
    ordinal?: boolean;
    sortable?: boolean;
};
export declare type DataTableFilter = {
    column: string;
    operator?: string;
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
    pagesCount: number;
    total: number;
};
export declare type DataProvider = {
    call: (params: Record<string, string | number>) => any;
    dataPath: string;
    paginationPath: string;
};
export interface IDataTable<T> {
    actions?: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    filters?: DataTableFilter[];
    pagination?: DataTablePagination;
    provider: T[] | DataProvider;
}
export declare function DataTable<T>(): JSX.Element;
