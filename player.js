var Song=["thodi der.mp3"];

var SongTitle=document.getElementById('SongTitle');
var SongSlider=document.getElementById('SongSlider');
var CurrentTime=document.getElementById('CurrentTime');
var duration=document.getElementById('duration');
var volumeSlider=document.getElementById('volumeSlider');
var nextSongTitle=document.getElementById('nextSongTitle');

var Song=new Audio();
var CurrentSong=0;

window.onload=LoadSong;

function loadSong(){
	Song.src="songs/"+Song[CurrentSong];
	SongTitle.textContent=(CurrentSong+1)+"."+Songs[CurrentSong];
	nextSongTitlen.innerHTML="<b>Next Song:</b>"+Songs[CurrentSong+1% Songs.lenght];
	Song.PlaybackRate=1;
	Song.volume=volumeSlider.value;
	Song.play();
	SetTimeOut(ShowDuration,(1000));

}


SetInterval(updateSongSlider,1000);

function updateSongSlider() {
	var c=math.round(Song.CurrentTime);
	SongSlider.value=c;
	CurrentTime.textContent=convertTime(c);
	if(Song.ended){
		next();
	} // body...
}

function convertTime(secs){
	var min=math.floor(secs/60);
	var sec=secs%60;
	min=(main<10)?"0"+min:min;
	sec=(sec<10)?"0"+sec:sec;
	return (min+":"+sec);
}

function showDuration(){
	var d=math.floor(Song.duration);
	SongSlider.setAttribute("max",d);
	duration.textContent=convertTime(d);
}


function playOrPauseSong(img){
	Song.PlaybackRate=1;
	if (Song.paused) {
		Song.play();
		img.src="image/pause.png";
	} else{
		Song.pause();
		img.src=images/play.png";

	}
}

function next(){
CurrentSong=CurrentSong+1% Song.lenght;
loadSong();
}


function previous(){
	CurrentSong--;
	CurrentSong=(CurrentSong<0)? Song.lenght-1:CurrentSong;
	loadSong();

}


function SeekSong(){
Song.CurrentTime=SongSlider.value;
CurrentTime.textContent=convertTime(Song.CurrentTime);

}


function adjustVolume(){
	Song.volume=volumeSlider.value;
}

function increasePlaybackRate(){
Songs.PlaybackRate+=0.5;

}

function decreasePlaybackRate(){
	Songs.PlaybackRate-=0.5;
}