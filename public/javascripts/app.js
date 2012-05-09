(function(){

/*****************************************
* HTML5 Audio stuff
*****************************************/

	var audioElement = document.getElementsByTagName('audio')[0];
			/*divAudioControlPlay = document.getElementsByClassName('play')[0],
			divAudioControlPause = document.getElementsByClassName('pause')[0],
			divAudioControlStop = document.getElementsByClassName('stop')[0],
			divAudioStatusElement = document.getElementsByClassName('audioStatus')[0];*/

	/*
	* Add event listeners to the audio element itself
	*/
	/*audioElement.addEventListener("play", function(){
		divAudioStatusElement.innerHTML = "It's playing!";
		document.body.style.background = "green";
	});
	audioElement.addEventListener("pause", function(){
		divAudioStatusElement.innerHTML = "It's paused!";
		document.body.style.background = "yellow";
	});
	audioElement.addEventListener("ended", function(){
		divAudioStatusElement.innerHTML = "It's done!";
		document.body.style.background = "red";
	});*/

	/*
	* Add event listeners to the audio UI controls on my page
	*/
	/*divAudioControlPlay.addEventListener("click", function(){
		audioElement.play();
	});
	divAudioControlPause.addEventListener("click", function(){
		audioElement.pause();
	});
	divAudioControlStop.addEventListener("click", function(){
		audioElement.currentTime = audioElement.seekable.end(audioElement.seekable);
	});*/

	/*
	* Play the audio when the page loads.
	*/
	audioElement.play();

})();
