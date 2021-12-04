import React from "react";
import { navigate } from "gatsby";
import { BsChevronDoubleLeft } from 'react-icons/bs'
import './GoBack.scss'

export default function GoBack() {
  return (
    <button className="GoBack" onClick={() => navigate(-1)}>
      <BsChevronDoubleLeft />
    </button>
  );
}