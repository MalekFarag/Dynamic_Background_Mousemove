(() => {
console.log('JavaScript file is linked.');

	const 	image = document.querySelector('.image-move');

	// image.mousemove(function(e){
	// 	var moveX = (e.pageX * - 1 / 15);
	//  	var moveY = (e.pageY * - 1 / 15);

	//  	this.style.backgroundPosition = moveX + 'px ' + moveY + "px";
	// })

	function move(e){
		var moveX = (e.pageX * -1 / 15);
	 	var moveY = (e.pageY * -1 / 15);

	 	this.style.backgroundPosition = moveX + 'px ' + moveY + "px";

	 	console.log('image is moving');
	}

	image.onmousemove = move;

})();
