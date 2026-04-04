import React from 'react';
import "./treatmentCard.scss"
import { useNavigate } from 'react-router';
import { getTreatmentDetailRoute, treatmentDetailPattern } from '../../Routes';

const TreatmentCard = (props) => {
    console.log(props.treatment,"hello treatment")
    const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(getTreatmentDetailRoute(props?.treatment?._id), {state: props?.treatment})}} className='treatment-card cursor-pointer'>
      <div className='treatment-img'>
        <img className='my-auto' src={props?.treatment?.image_url} alt="" />
      </div>
      <h5 className='fw-bold'>{props?.treatment?.treatment_name}</h5>
      <p>{props?.treatment?.short_desc}</p>

    </div>
  )
}

export default TreatmentCard
