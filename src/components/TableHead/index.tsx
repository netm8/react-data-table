import React from 'react'
import { useContext } from 'react'
import { DataTableColumn } from '../DataTable/DataTable'
import DataTableContext from '../DataTable/context'

import styles from './TableHead.module.scss'

import sort from './sort.svg'

function mapColumnsToCells<T>(columns: DataTableColumn<T>[]): JSX.Element[] {
  return columns.map((column, idx) => (
    <th className={styles.TableHeadCell} key={`${column.label}.${idx}`}>
      {column.ordinal ? '#' : column.label}
      {column.sortable && <img src={sort} />}
    </th>
  ))
}

function TableHead<T>(): JSX.Element {
  const { columns, actions } = useContext(DataTableContext)

  return (
    <thead>
      <tr>
        {mapColumnsToCells<T>(columns)}
        {actions && <th className={styles.TableHeadCell}>Actions</th>}
      </tr>
    </thead>
  )
}

export default TableHead
