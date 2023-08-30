import React, { useEffect, useState } from 'react'
import Hero from '../components/Home/Hero'
import HowItWorks from '../components/Home/HowItWorks'
import { Questions } from '../components/Subscribe/Questions'
import {initialQuestions, categories} from '../dataQuestions'
import Categories from '../components/Subscribe/Categories'
import Summary from '../components/Subscribe/Summary'
import { Button } from '../components/Button'
import OrderSummary from '../components/Subscribe/OrderSummary'


const Subscribe = () => {

  const [questions, setQuestions] = useState(initialQuestions)
  const [isOrderSummary, setIsOrderSummary] = useState(false)

  const handleSelectedChoice = (questionIndex, choiceLabel) => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === questionIndex) {
        return {
          ...question,
          selectedChoice: choiceLabel, // Assign the selected choice
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  useEffect(() => {
    if (isOrderSummary) {
      document.body.style.overflow = 'hidden' //Disable vertical scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto' //Restore normal scrolling on unmount
    }
  }, [isOrderSummary])

  const selectedChoices = questions.map((question) => question.selectedChoice)

  return (
    <div className='max-w-[1440px] mx-auto flex flex-col gap-[120px] pb-[120px] md:gap-[141px] md:pb-[141px] lg:gap-[200px] lg:pb-[200px]'>
      <div className='px-6 md:px-10 lg:px-20'>
        <Hero isSubsribePage={true}/>
      </div>
      <div className='lg:px-20'>
        <HowItWorks isSubsribePage={true}/>
      </div>
      <div className='lg:flex gap-[125px] lg:px-[165px]'>
        <Categories 
          categories={categories}
          questions={questions}
          selectedChoices={selectedChoices}
          />
        <div className='px-6 md:px-10 lg:px-0 lg:w-full'>
          {questions.map((question, idx) => (
            <Questions 
              key={idx} 
              index={idx} 
              questions={questions}
              title={question.title} 
              choices={question.choices}
              handleSelectedChoice={handleSelectedChoice}
              />
          ))}
            <Summary questions={questions}/>
          <div className='mt-14 text-center lg:text-right lg:mt-10'>
            <Button 
              text='Create my plan!'
              animate={true} 
              questions={questions}
              selectedChoices={selectedChoices}
              isSubsribePage={true}
              onClick={() => setIsOrderSummary(true)}
              />
          </div>
        </div>
      </div>
      {isOrderSummary && (
        <OrderSummary 
          selectedChoices={selectedChoices} 
          setIsOrderSummary={setIsOrderSummary}
          setQuestions={setQuestions}
          questions={questions}
          />
      )}
    </div>
  )
}

export default Subscribe