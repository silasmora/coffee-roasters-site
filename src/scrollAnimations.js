const intersectionObserver = () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        observer.unobserve(entry.target)
      } 
    })
  })
  
  const hiddenElements = document.querySelectorAll('.hide-left, .hide-right')
  hiddenElements.forEach((el) => observer.observe(el))
  

  return observer
}

export default intersectionObserver

