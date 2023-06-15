import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

type Props = {
  data: {
    total: number
    page: number
    pageTotal: number
    sortingCount: number
  }
}

export default function usePagination({ data }: Props) {
  const [pageData, setPageData] = useState<Props['data']>({
    page: 10,
    total: 10,
    pageTotal: 100,
    sortingCount: 10,
  })
  // const [page, setPage] = useState<number>(0) // 현재 페이지
  // const [total, setTotal] = useState(0) // 총 개수
  // const [sorting, setSorting] = useState(data.sortingCount) // 정렬 개수
  const router = useRouter() // 라우팅으로 받는 페이지 번호

  // 총 개수 세팅
  useEffect(() => {
    if (data) {
      // setTotal(data.total || 0)
      // setPage(data.page || 1)
      // setSorting(data.sortingCount || 10)
      
    }
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

  return {
    paginationData: { total, page, sorting },
  }
}
