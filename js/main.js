var count = new Date("dec 1,2018 00:00:00").getTime();
var x = setInterval(function() {
	var now = new Date().getTime();
	var d = count - now;

	var days = Math.floor(d/(1000*60*60*24));
	var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
	var minutes = Math.floor((d%(1000*60*60))/(1000*60));
	var seconds = Math.floor((d%(1000*60))/1000);

	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

},1000);

$(document).ready(function() {

	var $randomnbr = $(".nbr");
	var $timer = 22;
	var $it;
	var $data = 0;
	var index;
	var change;
	var letters = ["l", "a", "b", "o", "r", "i", "t", "-", "i", "n", "t", "e", "l", "l", "i", "g", "e", "n", "c", "e"];

	$randomnbr.each(function() {

     change = Math.round(Math.random()*100);
     $(this).attr('data-change', change);

     });

     function random() {
          return Math.round(Math.random()*9);
     };

     function select() {
          return Math.round(Math.random()*$randomnbr.length+1);
     };

     function value() {
          $('.nbr:nth-child('+select()+')').html(''+random()+'');
          $('.nbr:nth-child('+select()+')').attr('data-number', $data);
          $data++;

          $randomnbr.each(function() {
               if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                    index = $('.ltr').index(this);
                    $(this).html(letters[index]);
                    $(this).removeClass('nbr');
               }
          });
     };

     $it = setInterval(value, $timer);

     });







