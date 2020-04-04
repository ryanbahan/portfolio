gsap.from('.partial-bg', {opacity: 0, xPercent: -125, duration: 1.5, ease: 'Power2.easeInOut'});

gsap.from('nav', {yPercent: -150, duration: 2, ease: "expo.out"});

gsap.from('.firstname', {opacity: 0, duration: 2, delay: 1});

gsap.from('.lastname', {opacity: 0, delay: 1.5});

gsap.from('.skills-1', {opacity: 0, delay: 1.75});

gsap.from('.skills-2', {opacity: 0, delay: 2});

gsap.from('.skills-3', {opacity: 0, delay: 2.25});

gsap.from('.underline', {scaleX: 0, delay: 3.25});
