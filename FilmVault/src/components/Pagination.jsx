import React from 'react'

function Pagination({handlePrev,handleNext,PageNo}) {
  return (
    <div className='bg-gray-800/60 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev} className='px-8 hover:scale-110 duration-300 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{PageNo}</div>
       <div onClick={handleNext}className='px-8 hover:scale-110 duration-300 hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination