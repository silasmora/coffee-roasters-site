import React from 'react'

const Categories = ({ categories, selectedChoices }) => {

  return (
    <div className='hidden lg:flex flex-col'>
      {categories.map((category, idx) => (
        <div key={idx} className='flex flex-col gap-6'>
          <div className='flex gap-[28px] font-fraunces text-[24px] font-bold leading-8 text-grey'>
            <h3 className={`${selectedChoices[idx] ? 'text-darkCyan' : 'opacity-50'}`}>{category.number}</h3>
            <p className={`${selectedChoices[idx] ? 'text-darkGreyBlue' : 'opacity-50'}`}>{category.name}</p>
          </div>
            <div className={`${idx < categories.length - 1 && 'border border-grey w-[255px] opacity-50'}`}></div>
          <div></div>
        </div>
      ))}
    </div>
  )
}

export default Categories