import React from 'react'
import { Provider as DataTableProvider } from './context'
import { DataTable, IDataTable } from './DataTable'

export default function <T>({
  actions,
  pagination,
  columns,
  filters,
  provider,
}: IDataTable<T>): JSX.Element {
  return (
    <DataTableProvider
      actions={actions}
      columns={columns}
      filters={filters}
      pagination={pagination}
      provider={provider}
    >
      <DataTable<T> />
    </DataTableProvider>
  )
}
