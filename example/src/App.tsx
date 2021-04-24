import React from 'react';
import { DataTable } from './components/DataTable'
import { DataTableColumn } from './components/DataTable/components/DataTable'

export interface IUser {
  email: string
  profile: {
    first_name: string;
    last_name: string;
  }
}


const columns: DataTableColumn<IUser>[] = [
  {
    label: 'Email', 
    accessor: 'email'
  },
  {
    label: 'Full name',
    accessor: ({ profile }) => 
      `${profile.first_name} ${profile.last_name}`,
  }
]

function App() {
  return (
    <div className="App">
      <DataTable columns={columns} />
    </div>
  );
}

export default App;
