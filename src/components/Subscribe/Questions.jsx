import React, { useState } from 'react'

export const Questions = ({ title, choices, index, questions, handleSelectedChoice }) => {
  
  const [isChoiceOpen, setIsChoiceOpen] = useState(index < 1 ? true : false)

  const isFirstQuestionCapsule = questions[0].selectedChoice === 'Capsule'

  const handleQuestionToggle = () => {
    if (index === 3 && isFirstQuestionCapsule) {
      return //Do nothing if its the fourth questions and first choice is 'Capsule'
    }
    setIsChoiceOpen((prevState) => !prevState)
  }

  return (
      <>
        <div className={`flex justify-between items-center pb-8 md:pb-10 lg:pb-14 ${index === 3 && isFirstQuestionCapsule && 'opacity-50 line-through'}`}>
          <h3 
            onClick={handleQuestionToggle}
             className=' font-fraunces text-grey text-[24px] font-bold leading-[28px] md:text-[32px] md:leading-[48px] lg:text-[40px]'>{title}</h3>
          <svg
            className={`${!isChoiceOpen ? 'block' : 'hidden'} cursor-pointer`}
            onClick={handleQuestionToggle}  
            width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fill-rule="nonzero"/>
          </svg>
          <svg
            className={`${isChoiceOpen ? 'block' : 'hidden'} cursor-pointer`}
            onClick={handleQuestionToggle}  
            xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
            <path d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z" fill="#0E8784"/>
          </svg>
        </div>
       
        {isChoiceOpen ? (
          <div className={`flex flex-col gap-4 md:flex-row ${index !== questions.length - 1 ?'pb-[100px]' : ''} md:gap-[10px] lg:gap-[23px] `}>
            {choices.map((choice, idx) => (
              <div 
                onClick={() => handleSelectedChoice(index, choice.label)}
                key={idx} 
                className={`flex flex-col gap-2 rounded-lg p-6 md:gap-6 md:w-1/3 md:pt-8 md:pb-[84px] lg:px-[28px] 
                 cursor-pointer ${questions[index].selectedChoice === choice.label ? 'bg-darkCyan text-white' : 'bg-gray-100 text-darGreyBlue hover:bg-paleOrange hover:animate-slideUp'}`}>
                <h4 className='font-fraunces text-[24px] font-bold leading-[32px]'>{choice.label}</h4>
                <p className='text-[16px] leading-[26px]'>{choice.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </>
  )
}
