import Pagination from '@/components/ui/paginations/Pagination'
import React, { useState } from 'react'

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
]

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  )
}

export default function PaginationList() {
  const itemsPerPage = 4
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  // Invoke when user click t o request another page.
  const handlePageClick = (event: { selected: number }) => {
    console.log(event)
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <div>페이지 목록</div>
      <Items currentItems={currentItems} />

      <Pagination
        pageCount={pageCount}
        pageRange={5}
        onPageChangeHandler={e => handlePageClick(e)}
      />
    </>
  )
}
