import React from 'react'
import { DataTableColumn } from '../DataTable'



export interface ITableHead<T> {
  columns: DataTableColumn<T>[]
}

function mapColumnsToCells<T>(columns: DataTableColumn<T>[]) {
  return columns.map((column) => (
    <th>
      {column.label}
    </th>
  ))
} 

function TableHead<T>({ columns }: ITableHead<T>) {

  return (
    <thead>
      {mapColumnsToCells<T>(columns)}
    </thead>
  )
}

export default TableHead