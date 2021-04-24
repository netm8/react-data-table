export declare type DataTableAccessorFn<T> = (row: T) => string;
export declare type DataTableAccessor<T> = string | DataTableAccessorFn<T>;
export declare type DataTableColumn<T> = {
    label: string | JSX.Element;
    accessor: DataTableAccessor<T>;
    ordinal?: boolean;
};
export declare type DataTableAction<T> = {
    icon: string;
    href: DataTableAccessor<T>;
};
export declare type DataTablePagination = {};
export interface IDataTable<T> {
    actions: DataTableAction<T>[];
    columns: DataTableColumn<T>[];
    pagination?: DataTablePagination;
}
export declare function DataTable<T>({ actions, pagination, columns, }: IDataTable<T>): JSX.Element;
