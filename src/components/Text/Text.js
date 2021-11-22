import React from 'react'
import useRichText from '../../hooks/useRichText'

import "./Text.scss"

const Text = ({ text }) => {
  return (
    <p className="Text">
      {useRichText(text)}
    </p>
  )
}

export default Text
