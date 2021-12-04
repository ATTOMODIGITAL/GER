import React from "react"
import { navigate } from "gatsby"
import { BsChevronDoubleLeft } from "react-icons/bs"
import { BsArrowLeft } from "react-icons/bs"

import useWindowSize from "../../hooks/useWindowSize"
import "./GoBack.scss"

export default function GoBack() {
  const size = useWindowSize()

  return (
    <>
      {size > 880 ? (
        <button className="GoBackXL" onClick={() => navigate(-1)}>
          <BsArrowLeft />
        </button>
      ) : (
        <button className="GoBack" onClick={() => navigate(-1)}>
          <BsChevronDoubleLeft />
        </button>
      )}
    </>
  )
}
