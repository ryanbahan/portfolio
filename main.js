gsap.from('.partial-bg', {opacity: 0, xPercent: -125, duration: 1.25, ease: 'Power2.easeInOut'});

gsap.from('nav', {y: -150, duration: 2, ease: "expo.out", delay: 3.5});

gsap.from('.firstname', {y: -20, opacity: 0, duration: 0.75, delay: 1.125});

gsap.from('.lastname', {y: -20, opacity: 0, delay: 1.45, duration: 0.75});

gsap.from('.skills-1', {opacity: 0, delay: 2.25});

gsap.from('.skills-2', {opacity: 0, delay: 2.65});

gsap.from('.skills-3', {opacity: 0, delay: 3.05});

gsap.from('.fa-github', {opacity: 0, delay: 4.5});

gsap.from('.fa-linkedin-in', {opacity: 0, delay: 4.75});

gsap.from('.fa-envelope-square', {opacity: 0, delay: 5});
