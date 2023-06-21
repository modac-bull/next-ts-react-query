import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import React, { useState } from 'react'

const getAllPeople = () =>
  axios.get('https://swapi.dev/api/people').then(res => res.data)

const getSpecificPeople = (id: number) =>
  axios.get(`https://swapi.dev/api/people/${id}`).then(res => res.data)

export default function StarWarsPage() {
  const [peopleNum, setPeoplNum] = useState(1)
  // const { isLoading, error, data, isFetching } = useQuery(
  //   ['people'],
  //   getAllPeople,
  // )

  const { isLoading, error, data, isFetching } = useQuery(['people'], () =>
    getSpecificPeople(peopleNum),
  )

  if (isLoading) return 'Loading...'
  if (isFetching) return 'Is Fetching...'
  if (error) return 'An error has occurred: ' + error.message

  // 사용법(1)
  return (
    <div>
      StarWars People
      {/* <p> count : {data.count}</p> */}
      <p>name : {data.name}</p>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}
