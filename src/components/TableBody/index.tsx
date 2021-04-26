import React, { useContext } from 'react'
import parseAccessor from 'src/utils/parse-accessor'
import { DataTableColumn } from '../DataTable'
import DataTableContext from '../DataTable/context'

function mapColumnsToRows<T>(
  columns: DataTableColumn<T>[],
  data: T[]
): JSX.Element[] {
  return data.map((row: T, rowIdx: number) => (
    <tr key={rowIdx}>
      {columns.map((column, columnIdx: number) => {
        const { accessor } = column
        const data = parseAccessor<T>(accessor, row)

        return <td key={`${rowIdx}.${columnIdx}`}>{data}</td>
      })}
    </tr>
  ))
}

function TableBody<T>(): JSX.Element {
  const { data, columns } = useContext(DataTableContext)
  return <tbody>{mapColumnsToRows<T>(columns, data)}</tbody>
}

export default TableBody
