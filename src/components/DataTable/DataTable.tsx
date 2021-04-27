import React, { useContext } from 'react'
import TableHead from '../TableHead'
import TableBody from '../TableBody'
import TableFoot from '../TableFoot'
import Pagination from '../Pagination'

import DataTableContext from './context'

import styles from './DataTable.module.scss'

export type DataTableAccessorFn<T> = (row: T) => string | JSX.Element
export type DataTableAccessor<T> = string | DataTableAccessorFn<T>

export type DataTableColumn<T> = {
  label: string | JSX.Element
  accessor: DataTableAccessor<T>
  ordinal?: boolean
  sortable?: boolean
}

export type DataTableFilter = {
  column: string
  operator?: string
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
  pagesCount: number
  total: number
}

export type DataProvider = {
  call: (params: Record<string, string | number>) => any
  dataPath: string
  paginationPath: string
}

export interface IDataTable<T> {
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  filters?: DataTableFilter[]
  pagination?: DataTablePagination
  provider: T[] | DataProvider
}

export function DataTable<T>(): JSX.Element {
  const { pagination, handlers } = useContext(DataTableContext)

  return (
    <div className={styles.DataTableWrapper}>
      <table className={styles.DataTable}>
        <TableHead<T> />
        <TableBody<T> />
        <TableFoot<T> />
      </table>
      {pagination && (
        <Pagination
          page={pagination.page}
          pagesCount={pagination.pagesCount}
          onChange={handlers.setPage}
        />
      )}
    </div>
  )
}
