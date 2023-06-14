import React from 'react'
import ReactPaginate from 'react-paginate'

import { styled } from 'twin.macro'

export default function MyPagination() {
  const handlePageChange = selectedItem => {
    // 페이지 변경에 대한 처리를 수행합니다.
    console.log('Selected Page:', selectedItem.selected)
  }

  return (
    <StyledPagination
      pageCount={78} // 전체 페이지 수
      pageRangeDisplayed={5} // 현재 페이지를 중심으로 양쪽에 보여줄 페이지 수
      marginPagesDisplayed={1} // 처음과 마지막 페이지 사이에 표시할 페이지 수
      onPageChange={handlePageChange} // 페이지 변경 핸들러 함수
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
