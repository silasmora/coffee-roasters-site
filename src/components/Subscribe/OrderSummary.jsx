import React, { useState } from 'react'
import Confetti from 'react-confetti'
import { Button } from '../Button'
import { useNavigate } from 'react-router-dom'

const OrderSummary = ({ selectedChoices, setIsOrderSummary, questions, setQuestions }) => {

  const [showConfetti, setShowConfetti] = useState(false)

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

  const checkoutAmount = () => {
    const deliveryOption = selectedChoices[4]

    if (deliveryOption === 'Every week') {
      return '$14.00/ wk'
    } else if (deliveryOption === 'Every 2 weeks') {
      return '$17.25/ 2 wks'
    } else {
      return '$22.50/ mo'
    }
  }

  const navigate = useNavigate()

  const handleCheckout = () => {
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setIsOrderSummary(false)
      navigate('/')
      const updatedQuestions = questions.map(question => ({
        ...question,
        selectedChoice: ''
      }))
      setQuestions(updatedQuestions)
    }, 5000)
  }

  return (
    <div className='fixed inset-0 bg-black/50 px-6 pt-[35px] md:flex flex-col justify-center items-center'>
      {showConfetti && <Confetti />}
      <div className='w-full md:w-[540px]'>
        <div className='bg-2C343E py-[28px] px-6 rounded-t-lg md:px-14 md:py-[48px]'>
          <h1 className='font-fraunces text-[28px] text-white font-bold leading-8 md:text-[40px]'>Order Summary</h1>
        </div>
        <div className='bg-lightCream px-6 pt-10 rounded-b-lg md:px-14'>
          <div className='font-fraunces text-grey text-2xl font-bold leading-10'>
            "I drink my coffee as <span className={`${selectedChoices[0] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[0]}</span>, with a <span className={`${selectedChoices[1] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[1]}</span> type of bean. <span className={`${selectedChoices[2] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[2]} </span>
            {renderGroundText()}, sent to me <span className={`${selectedChoices[4] ? 'text-darkCyan' : 'border-b-2 border-darkCyan px-4 md:px-8'}`}>{selectedChoices[4]}</span>."
          </div>
          <p className='text-darkGreyBlue text-[15px] leading-[25px] md:mt-2'>Is this correct? You can proceed to checkout or go back to plan selection if something 
          is off. Subscription discount codes can also be redeemed at the checkout.</p>
          <div className='py-6 md:pt-[48px] md:pb-14'>
            <div className='md:flex items-center'>
              <h3 className='hidden font-fraunces text-[32px] font-bold leading-9 md:block md:w-1/2'>{checkoutAmount()}</h3>
              <Button
                isCheckOut={true}
                animate={true} 
                text={`Checkout`}
                onClick={handleCheckout}
                checkoutAmount={checkoutAmount()}
              />
            </div>
            <button className='mt-2 pt-[15px] pb-[16px] px-[30px] rounded-md bg-2C343E text-lightCream text-lg font-fraunces font-bold w-full leading-6 cursor-pointer hover:bg-2C343E/50' onClick={() => setIsOrderSummary(false)}>Go Back</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default OrderSummary