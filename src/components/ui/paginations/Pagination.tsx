import React from 'react'

import { styled } from 'twin.macro'
import ReactPaginate from 'react-paginate'

type Props = {
  pageCount: number // 전체 페이지 수
  pageRange: number // 현재 페이지를 중심으로 양쪽에 보여줄 페이지 수
  onPageChangeHandler: (e) => void
}

export default function Pagination({
  pageCount,
  pageRange = 5,
  onPageChangeHandler,
}: Props) {
  const pageChangeHandler = (selectedPage: { selected: number }) => {
    console.log('selectedPage', selectedPage)
  }
  return (
    <StyledPagination
      pageCount={pageCount}
      pageRangeDisplayed={pageRange}
      marginPagesDisplayed={1} // 처음과 마지막 페이지 사이에 표시할 페이지 수
      onPageChange={e => onPageChangeHandler(e)} // 페이지 변경 핸들러 함수
      activeClassName="active" // 활성화된 페이지의 클래스명
    />
  )
}

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  padding: 50px 0;
  border: 1px solid blue;
  li {
    margin-right: 5px;
    cursor: pointer;
  }

  li.active {
    font-weight: bold;
  }

  li a {
    text-decoration: none;
    color: #333;
    border: 1px solid red;
    padding: 5px 10px;
  }

  li.active a {
    color: #fff;
    background-color: #007bff;
    border-radius: 3px;
  }
`
