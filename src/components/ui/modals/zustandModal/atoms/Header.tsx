import React from 'react'

export default function Header({ title, onClose }) {
  return (
    <div>
      <h1>{title}</h1>
      <button type="button" onClick={onClose}>
        닫기
      </button>
    </div>
  )
}
