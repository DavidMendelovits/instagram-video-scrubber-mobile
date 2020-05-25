const frame = 1 / 22

function getZone (middleX, middleY, inX, inY) {
	if (Math.abs(inX - middleX) <= 25 && Math.abs(inY - middleY) <= 25) {
        return (0)
    }
	const top = (inY < middleY)
	const left = (inX < middleX)
	if (top) {
	  return (left) ? 1 : 2
	} else {
	  return (left) ? 3 : 4
	}
}

function scrub (target, zone) {
	if (!zone) {
		(target.paused) ?
		target.play() :
		target.pause()
	} else if (zone % 2 != 0) {
 	   target.currentTime -= frame
 	   target.pause()
	} else  {
 	   target.currentTime += frame
 	   target.pause()
  	}
}

function handleScrubbing (e) {
	e.preventDefault()
	let interface = (e.touches) ? e.touches[0] : e
	let videoBorderInfo = e.target.getBoundingClientRect()
	let middleY = videoBorderInfo.y + (videoBorderInfo.height / 2)
	let middleX = videoBorderInfo.x + (videoBorderInfo.width / 2)
	let zone = getZone(middleX, middleY, interface.clientX, interface.clientY)
	scrub(e.target, zone)
	return (true)
}

function transformVideo (el) {
	if (!el) { return false }
    el.style.zIndex = 100
	el.controls = true
	el.loop = false
	el.autoplay = false
	el.onended = (e) => {
		el.pause()
	}
	el.muted = true
	el.onclick = handleScrubbing
	el.ontouchstart = handleScrubbing
	return true
  }

window.addEventListener('click', (e) => {
    if (e.target.className === 'fXIG0') {
    	if (!transformVideo(e.target.offsetParent.children[0].childNodes[0].children[0].children[0])) {
			console.log('failed to init video scrubber')
	    }
    }
})