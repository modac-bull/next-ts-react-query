const Modal = ({
  title,
  contents,
  onClose,
}: {
  title: string
  contents: string
  onClose: () => void
}) => {
  console.log(title, contents, onClose)

  return (
    <div>
      <h1>{title}</h1>
      <p>{contents}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
