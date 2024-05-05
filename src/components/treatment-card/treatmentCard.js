import React from 'react';
import "./treatmentCard.scss"

const TreatmentCard = (props) => {
    console.log(props.treatment,"hello treatment")
  return (
    <div className='treatment-card cursor-pointer'>
      <div className='treatment-img'>
        <img className='my-auto' src={props?.treatment?.logo} alt="" />
      </div>
      <h5 className='fw-bold'>{props?.treatment?.name}</h5>
      <p>{props?.treatment?.shortDesc}</p>

    </div>
  )
}

export default TreatmentCard
