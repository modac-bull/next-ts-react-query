import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type Data = {
  name: string
  description: string
  subscribers_count: string
  stargazers_count: string
  forks_count: string
}

const fetchData = () =>
  axios
    .get('https://api.github.com/repos/tannerlinsley/react-query')
    .then(res => res.data)

export default function ReactQueryPage() {
  const { isLoading, error, data, isFetching } = useQuery<Data, Error>(
    ['repoData'],
    fetchData,
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  )
}
