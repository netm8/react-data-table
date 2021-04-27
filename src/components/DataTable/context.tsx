import React, { Component, createContext } from 'react'
import deepEqual from 'deep-equal'
import parseAccessor from 'src/utils/parse-accessor'
import {
  DataProvider,
  DataTableAction,
  DataTableColumn,
  DataTableFilter,
  DataTablePagination,
} from './DataTable'

interface DataTableContextState<T> {
  data: T[]
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  pagination?: DataTablePagination
  appliedFilters?: DataTableFilter[]
  filters?: DataTableFilter[]
  handlers: Handlers
}

interface DataTableProviderProps<T> {
  actions?: DataTableAction<T>[]
  columns: DataTableColumn<T>[]
  pagination?: DataTablePagination
  filters?: DataTableFilter[]
  provider: T[] | DataProvider
  children?: React.ReactNode
}

interface Handlers {
  setPage(page: number): void
  setFilters(filter: DataTableFilter): void
}

const initialState: DataTableContextState<any> = {
  data: [],
  columns: [],
  actions: [],
  appliedFilters: [],
  filters: [],
  pagination: {
    page: 1,
    pageSize: 100,
    pagesCount: 0,
    total: 0,
  },
  handlers: {
    setPage: () => {},
    setFilters: () => {},
  },
}

const DataTableContext = createContext(initialState)

export class Provider<T> extends Component<
  DataTableProviderProps<T>,
  DataTableContextState<T>
> {
  private provider: T[] | DataProvider

  constructor(props: DataTableProviderProps<T>) {
    super(props)

    this.loadData = this.loadData.bind(this)
    this.createParams = this.createParams.bind(this)
    this.setFilters = this.setFilters.bind(this)
    this.setPage = this.setPage.bind(this)

    this.state = {
      data: [],
      appliedFilters: [],
      filters: props.filters,
      actions: props.actions,
      columns: props.columns,
      pagination: props.pagination,
      handlers: {
        setPage: this.setPage,
        setFilters: this.setFilters,
      },
    }
    this.provider = props.provider
  }

  async componentDidMount(): Promise<void> {
    try {
      await this.loadData()
    } catch (e) {
      console.error('Failed to fetch data')
    }
  }

  async componentDidUpdate(
    prevProps: DataTableProviderProps<T>,
    prevState: DataTableContextState<T>
  ): Promise<void> {
    try {
      const hasFiltersChanged =
        !deepEqual(prevState.appliedFilters, this.state.appliedFilters) ||
        !deepEqual(prevState.pagination, this.state.pagination)

      if (!hasFiltersChanged) return

      await this.loadData()
      window.scrollTo(0, 0)
    } catch (e) {
      console.error('Failed to fetch data')
    }
  }

  createParams(): Record<string, string | number> {
    // To be implemented
    // const filters = this.state.filters?.reduce((params, filter) => {}, {})

    return {
      page: this.state.pagination?.page || 1,
      pageSize: this.state.pagination?.pageSize || 20,
    }
  }

  setPage(page: number): void {
    if (!this.state.pagination) return

    this.setState({
      pagination: {
        ...this.state.pagination,
        page,
      },
    })
  }

  setFilters(filters: DataTableFilter): void {}

  async loadData(): Promise<void> {
    // Collection provided. No API Call needed
    if (Array.isArray(this.provider)) {
      this.setState({ data: this.provider })
      return
    }

    // Make an API call and fetch data
    const params = this.createParams()
    const response = await this.provider.call(params)

    this.setState({
      data: parseAccessor(this.provider.dataPath, response),
      pagination: parseAccessor(this.provider.paginationPath, response),
    })
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
