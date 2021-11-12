import moment from 'moment';
import 'moment/locale/es';

var i = 0;
var txt = 'Moon Trip'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
moment.locale('es');
var countdown1 = moment('20211112', 'YYYYMMDD').fromNow().toString();
var countdown2 = moment('20211113', 'YYYYMMDD').fromNow().toString();
var countdown3 = moment('20211116', 'YYYYMMDD').fromNow().toString();
var countdown4 = moment('20211119', 'YYYYMMDD').fromNow().toString();
document.getElementById("countdown1").innerHTML = "<span class='item--home__countdown__span'>Lanzamiento del Rocket 3|STP-27AD2 " + countdown1;
document.getElementById("countdown1").innerHTML += "</span><span class='item--home__countdown__span'>Lanzamiento del Falcon 9 Block 5 " + countdown2;
document.getElementById("countdown1").innerHTML += "</span><span class='item--home__countdown__span'>Lanzamiento de Electron " + countdown3;
document.getElementById("countdown1").innerHTML += "</span><span class='item--home__countdown__span'>Lanzamiento de Vega " + countdown4;
document.getElementById('countdown1').innerHTML += "</span>";


typeWriter();
