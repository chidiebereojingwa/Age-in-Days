//var show = alert ("How are you Governor")

function ageInDays() {
  var birthYear = prompt("How Old are you my Good friend ? ");
  var ageInDayss = (2019 - birthYear) * 365;
  var h1 = document.createElement('h1')
  var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old')
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
 }

 function reset(){
     document.getElementById('ageInDays').remove();
 }