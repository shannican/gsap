gsap.from("#page1 h1 span",{
  opacity:0,
  stagger:-0.2,
  delay:1
})

gsap.from(".card",{
  y:100,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:2
  }
})