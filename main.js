window.onload = function ()  {
	
	/*-------start buttons-------------*/

	const up = document.querySelector('.up')
	const down = document.querySelector('.down')
	const right = document.querySelector('.right')
	const left = document.querySelector('.left')
	const random= document.querySelector('.random')
	const reset = document.querySelector('.reset')


	/* -------end buttons--------------*/

	const bigCircle = document.querySelector('.circle')
	const colour = document.querySelector('.big')
	const body = document.querySelector('body')

	let leftRight = 0 
	let upDown = 0
	let speed = 20
	let xspeed = 10
	let yspeed = 10
	let aux 
	
	function checkHit () {
		if (leftRight>583) {
			leftRight=583
			bigCircle.style.transform = 'translate('+ 583 +'px,'+ upDown +'px)'  	
		} else if (leftRight<-583) {
			leftRight=-583
			bigCircle.style.transform = 'translate('+ -583 +'px,'+ upDown +'px)'  	
			
		}

		if (upDown>230) {
			upDown=230
			bigCircle.style.transform = 'translate('+ leftRight +'px,'+ 230 +'px)'  
		} else if(upDown<-230) {
			upDown=-230
			bigCircle.style.transform = 'translate('+ leftRight +'px,'+ -230  +'px)'  
		}

	}

	function checkShuffle () {
		if (leftRight===580 || leftRight===-580) {
			xspeed *=-1
		}

		if (upDown===230 || upDown===-230) {
			yspeed *=-1
		}
	}


	function shuffle () {
	  aux = setTimeout(() => {

			leftRight+=xspeed

			upDown+=yspeed

			bigCircle.style.transform = 'translate('+ leftRight  +'px,'+ upDown +'px)'  
			
			checkShuffle()

			shuffle()
			console.log(leftRight)			
		},speed)
	}


	window.addEventListener('keydown', function(event) {
		if(event.key==='ArrowUp'){
			upDown-=75
			up.classList.add('pressed')
			bigCircle.style.transform = 'translate('+ leftRight+'px,'+ upDown +'px)' 
			bigCircle.style.transition = 'transform 0.15s'
			console.log(upDown)
			checkHit()


		} else if (event.key==='ArrowLeft') {
			
			leftRight-=75	
			left.classList.add('pressed')
			bigCircle.style.transform = 'translate('+ leftRight +'px,'+ upDown +'px)'  
			bigCircle.style.transition = 'transform 0.15s'			
			console.log(upDown)
			checkHit()
		

		} else if (event.key==='ArrowRight') {
			leftRight+=75
			right.classList.add('pressed')
			bigCircle.style.transform = 'translate('+ leftRight +'px,'+ upDown +'px)'  
			bigCircle.style.transition = 'transform 0.15s'			
			console.log(upDown)
			checkHit()
			


		} else if (event.key==='ArrowDown') {
			upDown+=75
			down.classList.add('pressed')
			bigCircle.style.transform = 'translate('+ leftRight +'px,'+ upDown +'px)'  
			bigCircle.style.transition = 'transform 0.15s'			
			console.log(upDown)			
			checkHit()
		

		

		} else if(event.key==='s'){

			random.classList.add('pressed')
			shuffle()

		} else if (event.key==='t'){

			leftRight=0
			upDown=0
			clearTimeout(aux)
			reset.classList.add('pressed')
			bigCircle.classList.remove('movement')
			bigCircle.style.transform= 'translate('+ leftRight +'px,'+ upDown + 'px)'


		} else if (event.key==='b'){

			colour.style.fill='blue'

		} else if(event.key==='r'){
			
			colour.style.fill = 'red'

		}else if(event.key==='g') {

			colour.style.fill = 'green'
		}
	})
			
	/*-------------------brightness keys------------------------*/

	window.addEventListener('keyup', function(event){
		if(event.key==='ArrowUp') {
			up.classList.remove('pressed')
		} else if (event.key==='ArrowLeft') {
			left.classList.remove('pressed')

		} else if (event.key==='ArrowRight') {
			right.classList.remove('pressed')

		} else if (event.key==='ArrowDown') {
			down.classList.remove('pressed')

		} else if (event.key==='s') {
			random.classList.remove('pressed')
		} else if (event.key==='t'){
			reset.classList.remove('pressed')
		}
	})
}