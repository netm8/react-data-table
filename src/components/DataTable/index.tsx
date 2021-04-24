import React from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import TableFoot from '../TableFoot'
import Pagination from '../Pagination'

import styles from './DataTable.module.scss'

export type DataTableAccessorFn<T> = (row: T) => string
export type DataTableAccessor<T> = string | DataTableAccessorFn<T>

export type DataTableColumn<T> = {
  label: string | JSX.Element
  accessor: DataTableAccessor<T>
  ordinal?: boolean
}

export type DataTableAction<T> = {
  icon: string
  href: DataTableAccessor<T>
}

export type DataTablePagination = {}

export interface IDataTable<T> {
  actions: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  pagination?: DataTablePagination
}

export function DataTable<T>({
  actions,
  pagination,
  columns,
}: IDataTable<T>): JSX.Element {
  return (
    <div className={styles.DataTableWrapper}>
      <table>
        <TableHead columns={columns} />
        <TableBody />
        <TableFoot />
      </table>

      {pagination && <Pagination />}
    </div>
  )
}
