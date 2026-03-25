import React from 'react'
import RightCard from './RightCard'

const RightContene = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='h-full p-4 md:p-6 w-full md:w-2/3 flex flex-nowrap gap-4 md:gap-10 overflow-x-auto rounded-4xl'>
      {props.user.map((elem, idx) => {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContene
