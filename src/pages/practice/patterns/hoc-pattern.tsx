import React from 'react'

function withStyles(Compoenent) {
  return props => {
    const style = { padding: '5px', margin: '5px' }
    return (
      <>
        <Compoenent style={style} {...props} />
        <p style={style}>test</p>
      </>
    )
  }
}

const Text = ({ style }) => <p style={style}>Text!!</p>

const StyledText = withStyles(Text)

export default function HocPatternsPage() {
  return (
    <div>
      <StyledText />
    </div>
  )
}
