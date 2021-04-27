import React from 'react'
import { getProductsIndex } from './api/products'
import { DataTable } from './components/DataTable'
import { DataTableColumn } from './components/DataTable/components/DataTable/DataTable'
import Pill from './components/Pill'

export type ProductCondition = 'new' | 'used'

export interface IProduct {
  name: string
  ean: string
  price: number
  currency: string
  quantity: number
  condition: ProductCondition
}

const columns: DataTableColumn<IProduct>[] = [
  {
    label: 'Product name',
    accessor: 'name',
  },
  {
    label: 'EAN',
    accessor: 'ean',
  },
  {
    label: 'Price',
    accessor: ({ price, currency }) => `${price} ${currency}`,
  },
  {
    label: 'Quantity',
    accessor: 'quantity',
  },
  {
    label: 'Condition',
    accessor: ({ condition }) => <Pill value={condition} />,
  },
]

function App() {
  return (
    <div className="App">
      <DataTable<IProduct>
        actions={[]}
        columns={columns}
        provider={{
          call: getProductsIndex,
          dataPath: 'payload',
          paginationPath: 'pagination',
        }}
      />
    </div>
  )
}

export default App
