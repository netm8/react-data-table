import React, { FC } from 'react'
import cs from 'classnames'
import styles from './Pagination.module.scss'

export type PaginationProps = {
  onChange: (pageIndex: number) => void
  page: number
  pagesCount: number
}
const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1), (_, i) => i + start)

const getPageList = (
  totalPages: number,
  page: number,
  maxLength: number
): number[] => {
  if (maxLength < 5) throw 'maxLength must be at least 5'

  const sideWidth = maxLength < 9 ? 1 : 4
  const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1
  const rightWidth = (maxLength - sideWidth * 2 - 2) >> 1

  if (totalPages <= maxLength) {
    return range(1, totalPages)
  }
  if (page <= maxLength - sideWidth - 1 - rightWidth) {
    return range(1, maxLength - sideWidth - 1).concat(
      0,
      range(totalPages - sideWidth + 1, totalPages)
    )
  }
  if (page >= totalPages - sideWidth - 1 - rightWidth) {
    return range(1, sideWidth).concat(
      0,
      range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
    )
  }
  return range(1, sideWidth).concat(
    0,
    range(page - leftWidth, page + rightWidth),
    0,
    range(totalPages - sideWidth + 1, totalPages)
  )
}

const Pagination: FC<PaginationProps> = ({ onChange, page, pagesCount }) => {
  return (
    <ul className={styles.Pagination}>
      {getPageList(pagesCount, page, 20).map((number) => (
        <li
          className={cs(styles.PaginationItem, {
            [styles.PaginationItemActive]: page === number,
            [styles.PaginationItemSeparator]: number === 0,
          })}
          onClick={() => onChange(number)}
          key={number}
        >
          {number ? number : '...'}
        </li>
      ))}
    </ul>
  )
}

export default Pagination
