import React from 'react'
import InfoRest from '../InfoRest/InfoRestXS';
import ButtonsCTAs from '../ButtonsCTAs/ButtonsCTAs';
import "./CardPic.scss"

const CardPic = ({ class1, name, dir1, dir2, time1, time2, menu, booking, bookGroup }) => {
  const hasGroup = () => {
    if (bookGroup.toLowerCase() === "no") {
      return false
    } else {
      return true
    }
  }

  return (
    <div className={`${class1} CardPic`}>
      <div className='CardPic__container'>
        <div className='CardPic__container--item0'>
          <h1>{name}</h1>
        </div>
        <div className='CardPic__container--item1'>
          <InfoRest dir1={dir1} dir2={dir2} time1={time1} time2={time2} />
        </div>
        <div className='CardPic__container--item2'>
          <ButtonsCTAs menu={menu} booking={booking}/>
        </div>
        
        {hasGroup() && (
          <div className='CardPic__container--item3'>
            <p><small>*Acepta eventos de grupo</small></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CardPic