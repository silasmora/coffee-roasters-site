import React from 'react'


const Summary = ({ questions }) => {

  const selectedChoices = questions.map((question) => question.selectedChoice)

  const renderGroundText = () => {
    if (selectedChoices[0] === 'Capsule') {
      return ''
    } else {
      return (
        <span>
          ground ala <span className={`${selectedChoices[3] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[3]}</span>
        </span>
      )
    }
  }

  return (
    <div className='bg-2C343E px-6 py-8 rounded-[10px] flex flex-col gap-2 md:px-[44px] md:py-[27px] lg:px-16 lg:py-[47px] mt-[114px] md:mt-[140px] lg:mt-[84px]'>
      <h4 className='text-white leading-6 uppercase text-opacity-50'>Order Summary</h4>
      <div className='font-fraunces text-white text-2xl font-bold leading-10'>
        "I drink my coffee as <span className={`${selectedChoices[0] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[0]}</span>, with a <span className={`${selectedChoices[1] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[1]}</span> type of bean. <span className={`${selectedChoices[2] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[2]} </span>
        {renderGroundText()}, sent to me <span className={`${selectedChoices[4] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[4]}</span>."
      </div>
    </div>
  )
}

export default Summary