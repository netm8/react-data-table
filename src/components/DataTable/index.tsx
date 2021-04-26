import React from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import TableFoot from '../TableFoot'
import Pagination from '../Pagination'

import { Provider as DataTableProvider } from './context'

import styles from './DataTable.module.scss'

export type DataTableAccessorFn<T> = (row: T) => string
export type DataTableAccessor<T> = string | DataTableAccessorFn<T>

export type DataTableColumn<T> = {
  label: string | JSX.Element
  accessor: DataTableAccessor<T>
  ordinal?: boolean
  sortable?: boolean
}

export type DataTableFilter = {
  column: string
  operator: string
  value: string | number
}

export type DataTableAction<T> = {
  icon: string | JSX.Element
  href?: DataTableAccessor<T>
  onClick?(): void
}

export type DataTablePagination = {
  page: number
  pageSize: number
  total: number
}

export type DataTableApiCallParams = {
  [key: string]: string | number
}

export type DataProvider<T> = {
  call: (params: DataTableApiCallParams) => Promise<T>
  dataPath: string
  paginationPath: string
}

export interface IDataTable<T> {
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  filters?: DataTableFilter[]
  pagination?: DataTablePagination
  provider: T[] | DataProvider<T>
}

export function DataTable<T>({
  actions,
  pagination,
  columns,
  filters,
  provider,
}: IDataTable<T>): JSX.Element {
  return (
    <DataTableProvider<T>
      actions={actions}
      columns={columns}
      filters={filters}
      pagination={pagination}
      provider={provider}
    >
      <div className={styles.DataTableWrapper}>
        <table className={styles.DataTable}>
          <TableHead<T> />
          <TableBody<T> />
          <TableFoot<T> />
        </table>
        {pagination && <Pagination />}
      </div>
    </DataTableProvider>
  )
}
