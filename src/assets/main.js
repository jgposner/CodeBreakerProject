let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value=='' or attempt.value==''){
      setHiddenFields();
    }
    if(!validateInput(input.value)) {
      return ;
    }
    attempt.value ++;


}

//implement new functions here
function getResults(input) {
  let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for (i=0; i < input.length; i++) {
    if(input.charAt(i) == answer.value.charAt(i)) {
      html += '<span class="glyphicon glyphicon-ok"></span>'
    } else if(answer.value.indexOf(input.charAt(i)) > -1) {
      
    }
  }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random()*10000).toString();
  while(answer.lenght<4){
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validInput(input) {
  if(input.length==4) {
    return true;
  }
  setMessage("Guesses must be exactly 4 characters long.");
  return false;

}
