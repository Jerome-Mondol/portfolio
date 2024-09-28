let main = document.querySelector(".main")
let cursor = document.querySelector(".cursor")
let nav = document.querySelector("nav")
let myImage = document.querySelector(".hero-p2 img")
let icons = document.querySelectorAll(".social-media label")
let aboutPage = document.querySelector(".about-main")
let heroBtn = document.querySelector(".hero-p2-btn")
let card = document.querySelector(".about-p3-sub2")
let aboutIcon = document.querySelectorAll(".about-p3-sub1 label")
let htmlBtn = document.querySelector(".html")
let htmlCard = document.querySelector("#html")
let cssBtn = document.querySelector(".css")
let cssCard = document.querySelector("#css")
let jsBtn = document.querySelector(".javascript")
let jsCard = document.querySelector("#javascript")
let bootstrapBtn = document.querySelector(".bootstrap")
let bootstrapCard = document.querySelector("#bootstrap")
let tailwindBtn = document.querySelector(".tailwind")
let tailwindCard = document.querySelector("#tailwind")
let projects = document.querySelector(".projects")
let project1 = document.querySelector(".project-1")
let project2 = document.querySelector(".project-2")
let contact1 = document.querySelector(".contact-p1")
let contact2 = document.querySelector(".contact-p2")

main.addEventListener("mousemove", (move) => {
  gsap.to(cursor, {
    x: move.x,
    y: move.y,
    duration: 2,
    ease: "elastic.out",
    backgroundColor: "21212170"
  })
})

nav.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 0,
  })
})

nav.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  })
})

myImage.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 0,
  })
})

myImage.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  })
})

heroBtn.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 0,
  })
})

heroBtn.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  })
})

aboutPage.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundColor: "#ee60567f"
  })
})

aboutPage.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundColor: "#21212170"
  })
})

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
    })
  })

  icon.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
    })
  })
})

projects.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundColor: "#ee60567f",
  })
})

project1.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 0,
  })
})

project1.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  })
})


project2.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 0,
  })
})


project2.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  })
})

contact1.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundColor: "#ee60567f"
  })
})




function aboutCard() {
  htmlBtn.addEventListener("mouseover", () => {
    htmlCard.classList.add("custom")
    gsap.to(cursor, {
      scale: 0,
    })
  
    gsap.to(htmlCard, {
      visibility: "visible",
      zIndex: 10,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "2px solid #EE6056",
    })
  })
  
  htmlBtn.addEventListener("mouseout", () => {
    gsap.to(cursor, {
      scale: 1,
    })
    gsap.to(htmlCard, {
      visibility: "hidden",
      zIndex: 1,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "none",
    })
  
  })
  
  cssBtn.addEventListener("mouseover", () => {
    cssCard.classList.add("custom")
    gsap.to(cursor, {
      scale: 0,
    })
    gsap.to(cssCard, {
      visibility: "visible",
    })
  
    gsap.to(".about-p3-sub2", {
      border: "2px solid #EE6056",
    })
  })
  
  cssBtn.addEventListener("mouseout", () => {
    gsap.to(cursor, {
      scale: 1,
    })
    gsap.to(cssCard, {
      visibility: "hidden",
      zIndex: 1,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "none",
    })
  })
  
  jsBtn.addEventListener("mouseover", () => {
    jsCard.classList.add("custom")
    gsap.to(cursor, {
      scale: 0,
    })
    gsap.to(jsCard, {
      visibility: "visible",
    })
  
    gsap.to(".about-p3-sub2", {
      border: "2px solid #EE6056",
    })
  })
  
  jsBtn.addEventListener("mouseout", () => {
    gsap.to(cursor, {
      scale: 1,
    })
    gsap.to(jsCard, {
      visibility: "hidden",
      zIndex: 1,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "none",
    })
  })
  
  bootstrapBtn.addEventListener("mouseover", () => {
    bootstrapCard.classList.add("custom")
    gsap.to(cursor, {
      scale: 0,
    })
    gsap.to(bootstrapCard, {
      visibility: "visible",
    })
  
    gsap.to(".about-p3-sub2", {
      border: "2px solid #EE6056",
    })
  })
  
  bootstrapBtn.addEventListener("mouseout", () => {
    gsap.to(cursor, {
      scale: 1,
    })
    gsap.to(bootstrapCard, {
      visibility: "hidden",
      zIndex: 1,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "none",
    })
  })
  
  tailwindBtn.addEventListener("mouseover", () => {
    tailwindCard.classList.add("custom")
    gsap.to(cursor, {
      scale: 0,
    })
    gsap.to(tailwindCard, {
      visibility: "visible",
    })
  
    gsap.to(".about-p3-sub2", {
      border: "2px solid #EE6056",
    })
  })
  
  tailwindBtn.addEventListener("mouseout", () => {
    gsap.to(cursor, {
      scale: 1,
    })
    gsap.to(tailwindCard, {
      visibility: "hidden",
      zIndex: 1,
    })
  
    gsap.to(".about-p3-sub2", {
      border: "none",
    })
  })
  
  
}
aboutCard()





let tl = gsap.timeline()

tl.from(".logo h1", {
  y: 100,
  opacity: 0,
  duration: 0.5,
}, "navbar")

tl.from(".nav-links a", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
}, "same")

tl.from(".nav-links button", {
  y: 100,
}, "same")

tl.from(".hero-p1 h1, .hero-p1 p", {
  x: -500,
  stagger: 0.2,
  opacity: 0,
}, "same")

tl.from(".hero-p2 img", {
  x: -100,
  opacity: 0,
  duration: 0.4,
}, "same")

tl.from(".social-media label", {
  y: -200,
  opacity: 0,
  scale: 0,
  duration: 0.4,
  stagger: -0.2,
}, "same")

tl.from(".hero-p2-btn", {
  x: -100,
  opacity: 0,
  duration: 0.4,
}, "same")

tl.from(".about-p1 img", {
  x: 500,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".about-p1",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".about-p2-sub1", {
  x: 100,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".about-p1",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".about-p3", {
  x: 100,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".about-p1",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".projects-h1", {
  y: 100,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".projects",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".project-1", {
  x: -200,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".projects-main",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".project-2", {
  x: 200,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".projects-main",
      scroller: "body",
      scrub: 1,
      start: "top 90%",
      end: "top 30%",
    }
})

tl.from(".contact-p1", {
  x: -200,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".contact",
      scroller: "body",
      scrub: 1,
      start: "top 60%",
      end: "top 30%",
    }
})

tl.from(".contact-p2", {
  x: 200,
  opacity: 0,
  duration: 0.4,
    scrollTrigger: {
      trigger: ".contact",
      scroller: "body",
      scrub: 1,
      start: "top 60%",
      end: "top 30%",
    }
})