var firstH1 = document.querySelector("#first").textContent

var splittedText = firstH1.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})


document.querySelector("#first").innerHTML = clutter



gsap.from("#first span",{
  opacity:0,
  duration:1,
  delay:1,
  stagger:0.2,
  y:150
})