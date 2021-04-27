import { DataTableAccessor } from 'src/components/DataTable/DataTable'

export default function <T>(accessor: DataTableAccessor<T>, row: T) {
  if (typeof accessor === 'function') {
    return accessor(row)
  } else {
    return accessor
      .split('.')
      .reduce((acc: any, property: string, idx: number, arr: string[]) => {
        if (Object.hasOwnProperty.call(acc, property)) {
          return acc[property]
        } else {
          console.error(`Accessor ${accessor} did not return any data`)
          arr.splice(1)
          return null
        }
      }, row)
  }
}
