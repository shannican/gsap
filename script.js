var tl = gsap.timeline()

tl.from("#nav h2,#nav h3",{
  y:-50,
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.2
})


tl.from("#left h1",{
  x:-400,
  opacity:0,
  duration:0.8
})

tl.from("#left button",{
  opacity:0,
  duration:0.6
})

tl.from("#right",{
  opacity:0,
  duration:0.5
})