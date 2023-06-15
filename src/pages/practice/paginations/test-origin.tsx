import React, { useState } from 'react'
import Pagination from 'react-js-pagination'
import { styled, theme } from 'twin.macro'

export default function PaginationOrigin() {
  const [activePage, setActivePage] = useState<number>(1)

  return (
    <PaginationContainer>
      <Pagination
        activePage={Number(activePage)}
        itemsCountPerPage={Number(1)}
        totalItemsCount={Number(20)}
        pageRangeDisplayed={5}
        itemClassFirst={'item-first'}
        itemClassPrev={'item-prev'}
        itemClassNext={'item-next'}
        itemClassLast={'item-last'}
        onChange={pageNumber => {
          console.log('onChange', pageNumber)
          setActivePage(pageNumber)
        }}
      />
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    font-size: 13px;
    color: #6c7293;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    &[class*='item'] {
      font-size: 0;
      border: 1px solid red;
    }
    &.item-first {
      margin-right: -5px;
      /* background-image: url(${IconFirst.src}); */
    }
    &.item-prev {
      /* background-image: url(${IconPrev.src}); */
    }
    &.item-next {
      /* background-image: url(${IconNext.src}); */
    }
    &.item-last {
      margin-left: -5px;
      /* background-image: url(${IconLast.src}); */
    }
    &.active {
      font-weight: 700;
      border: 1px solid ${theme`colors.electric`};
      color: ${theme`colors.black`};
      cursor: revert;
      transform: revert;
    }
    &.disabled {
      cursor: revert;
      transform: revert;
      opacity: 0;
    }
  }
`
