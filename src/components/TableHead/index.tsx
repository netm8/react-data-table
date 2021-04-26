import React from 'react'
import { useContext } from 'react'
import { DataTableColumn } from '../DataTable'
import DataTableContext from '../DataTable/context'

import sort from './sort.svg'

function mapColumnsToCells<T>(columns: DataTableColumn<T>[]): JSX.Element[] {
  return columns.map((column, idx) => (
    <th key={`${column.label}.${idx}`}>
      {column.label}
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
        {actions && <th>Actions</th>}
      </tr>
    </thead>
  )
}

export default TableHead
