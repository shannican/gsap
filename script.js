var tl = gsap.timeline()

tl.from("#nav h2,#nav h3",{
  y:-50,
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.2
})

tl.from("#left",{
  width:0,
  duration:1
},"anim")

tl.to("#right",{
  width:"45%",
  duration:1
},"anim")

tl.from("#left h1",{
  x:-400,
  opacity:0,
  duration:0.8
})

tl.from("#left button",{
  opacity:0,
  duration:0.6
})