const intersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll('.hide-left, .hide-right')
  hiddenElements.forEach((el) => observer.observe(el))
  

  return observer
}

export default intersectionObserver

