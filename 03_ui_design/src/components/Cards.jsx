import React from 'react'

const Cards = (props) => {
    console.log(props.data)
  return (
    <div className='card'>
        <div className="img">
            <img src={props.data.img} alt="" />
        </div>
        <div className="info">

        <div className="number">{props.data.id}</div>
        <div className='contents'>
            <p>{props.data.title}</p>
            <div className='btns'>
                <button style={{backgroundColor:'royalblue'}}>{props.data.tag}</button>
                <p style={{backgroundColor:'royalblue'}}><i className="fa-solid fa-arrow-right"></i></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cards