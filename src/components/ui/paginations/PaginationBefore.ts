import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Pagination from 'react-js-pagination'

import tw, { styled, css, theme } from 'twin.macro'

import IconFirst from '/public/images/common/pagination-left-icon-double-arrow.svg'
import IconPrev from '/public/images/common/pagination-left-icon-arrow.svg'
import IconNext from '/public/images/common/pagination-right-icon-arrow.svg'
import IconLast from '/public/images/common/pagination-right-icon-double-arrow.svg'

export default function usePagination({ data, sortingCount = 10 }) {
  const [page, setPage] = useState(0) // 현재 페이지
  const [total, setTotal] = useState(0) // 총 개수
  const [sorting, setSorting] = useState(sortingCount) // 정렬 개수
  const router = useRouter() // 라우팅으로 받는 페이지 번호

  // 총 개수 세팅
  useEffect(() => {
    if (data) {
      setTotal(data.total || 0)
      setPage(data.page || 1)
      setSorting(sortingCount || 10)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  /* 
  초기 페이지 번호 라우팅으로 액티브 페이지 번호값 세팅 
  TODO
  - 모달에서 페이지네이션 사용할 경우 라우팅으로 번호값 세팅하지 않음, 옵션값으로 예외처리 필요
  - 현재는 pageIdx 값이 없을 때 setPage(1) 로 초기화
  
  */
  useEffect(() => {
    if (!router.isReady) true
    const { pageIdx } = router.query
    pageIdx ? setPage(pageIdx) : setPage(1)
  }, [router])

  // 페이지네이션 컴포넌트
  const PaginationComponent = ({ onChangePagination }, e) => {
    // 페이지 클릭
    const onChangeHandler = e => {
      onChangePagination(e)
    }
    return
    total && sorting !== 0 ? (
      <PaginationContainer>
        <Pagination
          activePage={Number(page)}
          itemsCountPerPage={Number(sorting)}
          totalItemsCount={Number(total)}
          pageRangeDisplayed={5}
          itemClassFirst={'item-first'}
          itemClassPrev={'item-prev'}
          itemClassNext={'item-next'}
          itemClassLast={'item-last'}
          onChange={onChangeHandler}
        />
      </PaginationContainer>
    ) : null
  }

  return {
    paginationData: { sortingCount, total, page, sorting },
    PaginationComponent,
  }
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
    }
    &.item-first {
      margin-right: -5px;
      background-image: url(${IconFirst.src});
    }
    &.item-prev {
      background-image: url(${IconPrev.src});
    }
    &.item-next {
      background-image: url(${IconNext.src});
    }
    &.item-last {
      margin-left: -5px;
      background-image: url(${IconLast.src});
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
