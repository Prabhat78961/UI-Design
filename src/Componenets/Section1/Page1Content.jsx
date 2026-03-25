import React from 'react'
import LeftContent from './LeftContent'
import RightContene from './RightContene'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex flex-col md:flex-row gap-10 md:gap-10 items-center h-auto md:h-[90vh] px-4 md:px-18'>
      <LeftContent />
      <RightContene user={props.user} />
    </div>
  )
}

export default Page1Content
