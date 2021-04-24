import { DataTableColumn } from '../DataTable';
export interface ITableHead<T> {
    columns: DataTableColumn<T>[];
}
declare function TableHead<T>({ columns }: ITableHead<T>): JSX.Element;
export default TableHead;
