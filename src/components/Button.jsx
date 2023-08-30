import React from 'react'

export const Button = ({ text, onClick, animate, questions, selectedChoices, isHomePage, isSubsribePage, isCheckOut, checkoutAmount}) => {

  const handleActivateButton = () => {
    if (isSubsribePage) {
      const isFirstQuestionCapsule = questions[0].selectedChoice === 'Capsule';

      if (isFirstQuestionCapsule) {
        const selectedChoicesSubset = selectedChoices.filter(
          (choice, index) => index === 0 || index === 1 || index === 2 || index === 4
        );
        return selectedChoicesSubset.every((choice) => choice !== '');
      }

      return selectedChoices.every((choice) => choice !== '');
    }

    return false; // In case isSubsribePage is false
  }

  return (
    <button 
      className={` 
        ${animate && ' hover:animate-bounce'} 
        ${isSubsribePage && !handleActivateButton() ? 'btn-disable' : ''} 
        ${handleActivateButton() ? 'btn' : ''} 
        ${isHomePage && 'btn'}
        ${isCheckOut && 'btn w-full md:w-1/2'}
        `} 
      onClick={onClick}
      disabled={!handleActivateButton() && isSubsribePage}
    >
      {text} <span className={`${isCheckOut && 'md:hidden'}`}>{checkoutAmount}</span>
    </button>
  )
}
