function addTo({ title, priority }) {
  return { type: 'todo/ADD', title, priority }
}

console.log(addTo({ title: '영화보기', priority: 'high' }))

export default function ExPage() {
  return <>123</>
}
