import barba from '@barba/core';
import gsap from 'gsap';

let layer1 = document.querySelector('.animation-layer .layer-1'),
	img1 = layer1.querySelector('img'),
	layer2 = document.querySelector('.animation-layer .layer-2'),
	layer3 = document.querySelector('.animation-layer .layer-3'),
	tl = gsap.timeline();

console.log(img1);

barba.init({
	transitions: [{
	    name: 'default-transition',
	    leave(data) {
	    	let tl = gsap.timeline();

	    	return tl.to(data.current.container, {opacity: 0, duration: 1.4, onComplete: function() {
								document.body.classList.add('fixed');
							}
						})
	    				.to(layer1, {x: 0, duration: .7}, '-=1.4')
	    				.from(img1, {x: -80 + '%'}, '-=1')
	    				.to(layer2, {x: 0, duration: .4}, '-=.35')
	    				.to(layer3, {x: 0, duration: .3}, '-=.2')
	    				.to(img1, {opacity: 0, duration: 0.00001});
      	},
		enter(data) {
			let tl = gsap.timeline();

			return tl.to(layer3, {x: 130 + '%', duration: .4})
						.to(layer2, {x: 120 + '%', duration: .5}, '-=.2')
						.to(layer1, {x: 110 + '%', duration: .6}, '-=.25');
		},
		after(data) {
			let tl = gsap.timeline();

			return tl.from(data.next.container, {opacity: 0, duration: .4, onComplete: function() {
								document.body.classList.remove('fixed');
							}
						})
						.to(layer1, {x: -110 + '%', duration: 0.000001}, '-=.2')
						.to(img1, {opacity: 1, duration: 0.00001})
						.to(layer2, {x: -120 + '%', duration: 0.000001})
						.to(layer3, {x: -130 + '%', duration: 0.000001});
		}
  	}]
});