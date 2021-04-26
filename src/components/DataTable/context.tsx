import React, { Component, createContext } from 'react'
import {
  DataProvider,
  DataTableAction,
  DataTableApiCallParams,
  DataTableColumn,
  DataTableFilter,
  DataTablePagination,
} from './index'

interface DataTableContextState<T> {
  data: T[]
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  pagination?: DataTablePagination
  filters?: DataTableFilter[]
}

interface DataTableProviderProps<T> {
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  pagination?: DataTablePagination
  filters?: DataTableFilter[]
  provider: T[] | DataProvider<T>
  children?: React.ReactNode
}

const initialState: DataTableContextState<any> = {
  data: [],
  columns: [],
  actions: [],
  filters: [],
  pagination: {
    page: 1,
    pageSize: 10,
    total: 0,
  },
}

const DataTableContext = createContext(initialState)

export class Provider<T> extends Component<
  DataTableProviderProps<T>,
  DataTableContextState<T>
> {
  private provider: T[] | DataProvider<T>

  constructor(props: DataTableProviderProps<T>) {
    super(props)
    this.state = {
      data: [],
      actions: props.actions,
      columns: props.columns,
      filters: props.filters,
      pagination: props.pagination,
    }
    this.provider = props.provider

    this.loadData = this.loadData.bind(this)
    this.createParams = this.createParams.bind(this)
  }

  async componentDidMount(): Promise<void> {
    this.loadData()
  }

  createParams(): DataTableApiCallParams {
    return {}
  }

  async loadData(): Promise<void> {
    // Collection provided. No API Call needed
    if (Array.isArray(this.provider)) {
      this.setState({ data: this.provider })
      return
    }

    // Make an API call and fetch data

    const params = this.createParams()
    const response = await this.provider.call(params)
  }

  render(): JSX.Element {
    return (
      <DataTableContext.Provider value={this.state}>
        {this.props.children}
      </DataTableContext.Provider>
    )
  }
}

export default DataTableContext
