const timeline = gsap.timeline({defaults:{duration: 1}});

timeline.from(".partial-bg", {opacity: 0, xPercent: -125, duration: 1.25, ease: 'Power2.easeInOut'})
.from('.firstname', {y: -20, opacity: 0, duration: 0.75}, "-=0.15")
.from('.lastname', {y: -20, opacity: 0, duration: 0.75}, "-=0.45")
.from('.skills-1', {opacity: 0}, "-=0.15")
.from('.skills-2', {opacity: 0}, "-=0.5")
.from('.skills-3', {opacity: 0}, "-=0.5")
.from('nav', {y: -150, duration: 2, ease: "expo.out"}, "-=0.65")
.from('.fa-github', {opacity: 0}, "-=0.75")
.from('.fa-linkedin-in', {opacity: 0}, "-=0.75")
.from('.fa-envelope-square', {opacity: 0}, "-=0.75")
