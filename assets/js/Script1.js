function accionPlay() {
	if (!medio.paused && !medio.ended) {
		medio.pause();
		audio.pause();
		play.value = '\u25BA'; //\u25BA
		document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		audio.play();
		play.value = '||';
		document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar() {
	//Usar propiedad .currentTime
	//Reproducir el vídeo
	//Cambiar el valor del botón a ||
	medio.currentTime = 0;
	audio.currentTime = 0;
	accionPlay;
}
function accionRetrasar() {
	//Usar propiedad .curentTime
	//Contemplar que no existen valores negativos

	medio.currentTime = medio.currentTime - 5;
	audio.currentTime = audio.currentTime - 5;

	accionPlay;
}
function accionAdelantar() {
	//Contemplar que no existen valores mayores a medio.duration

	if (medio.duration > medio.currentTime + 5) {
		medio.currentTime = medio.currentTime + 5;
		audio.currentTime = audio.currentTime + 5;

		accionPlay;
	}
	else {
		accionReiniciar;
	}
}
function accionSilenciar() {
	//Utilizar medio.muted = true; o medio.muted = false;

	if (medio.muted == false) {
		audio.muted = true;
		medio.muted = true
		document.getElementById("silenciar").value = "escuchar";
	}
	else {
		audio.muted = false;
		medio.muted = false
		document.getElementById("silenciar").value = "silenciar";
		
	}
	
}
function accionMasVolumen() {
	//Contemplar que el valor máximo de volumen es 1
	if (audio.volume <= 1) {
		audio.volume + 0.1;
	}
}
function accionMenosVolumen() {
	//Contemplar que el valor mínimo de volumen es 0

	if (audio.volume >= 0) {
		audio.volume - 0.1;
	}
}

function iniciar() {

	medio = document.getElementById('medio');
	audio = document.getElementById('audio');
	play = document.getElementById('play');
	reiniciar = document.getElementById('reiniciar');
	retrasar = document.getElementById('retrasar');
	adelantar = document.getElementById('adelantar');
	silenciar = document.getElementById('silenciar');
	menosVolumen = document.getElementById('menosVolumen');
	masVolumen = document.getElementById('masVolumen');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);