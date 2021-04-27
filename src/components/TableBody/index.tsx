import React, { useContext } from 'react'
import parseAccessor from 'src/utils/parse-accessor'
import { DataTableAction, DataTableColumn } from '../DataTable/DataTable'
import DataTableContext from '../DataTable/context'

import styles from './TableBody.module.scss'

function mapColumnsToRows<T>(
  columns: DataTableColumn<T>[],
  data: T[],
  actions?: DataTableAction<T>[]
): JSX.Element[] {
  return data.map((row: T, rowIdx: number) => (
    <tr key={rowIdx}>
      {columns.map((column, columnIdx: number) => {
        const { accessor } = column
        const data = parseAccessor<T>(accessor, row)

        return (
          <td className={styles.TableBodyCell} key={`${rowIdx}.${columnIdx}`}>
            {data}
          </td>
        )
      })}
      {actions && <td className={styles.TableBodyCell}></td>}
    </tr>
  ))
}

function TableBody<T>(): JSX.Element {
  const { data, columns, actions } = useContext(DataTableContext)
  return <tbody>{mapColumnsToRows<T>(columns, data, actions)}</tbody>
}

export default TableBody
