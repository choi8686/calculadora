  var display = document.getElementById('window');
  var resulta = document.getElementById('result');



  function add(char){
    display.value += char;
    display.value;
  }

function calculation(){
  var result = eval(display.value);
  resulta.value = result;
}

function reset(){
  display.value = "";
  resulta.value = "";
}
