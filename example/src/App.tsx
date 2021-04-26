import React from 'react'
import { DataTable } from './components/DataTable'
import { DataTableColumn } from './components/DataTable/components/DataTable'

export interface IUser {
  email: string
  profile: {
    first_name: string
    last_name: string
  }
}

const data: IUser[] = [
  {
    email: 'mmstaniewski@gmail.com',
    profile: {
      first_name: 'Michał',
      last_name: 'Staniewski',
    },
  },
]

const columns: DataTableColumn<IUser>[] = [
  {
    label: 'Email',
    accessor: 'email',
    sortable: true,
  },
  {
    label: 'Full name',
    accessor: ({ profile }) => `${profile.first_name} ${profile.last_name}`,
  },
]

function App() {
  return (
    <div className="App">
      <DataTable<IUser> actions={[]} columns={columns} provider={data} />
    </div>
  )
}

export default App
