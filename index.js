var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");

var btn = document.getElementById("btn");
var send = document.getElementById("send");


var massege1 = firebase.database().ref().child("massege1");
var massege2 = firebase.database().ref().child("massege2");
var massege3 = firebase.database().ref().child("massege3");
massege1.on('value', function(mass1)
{
  m1.innerText = mass1.val();
});
massege2.on('value', function(mass2)
{
  m2.innerText = mass2.val();
});
massege3.on('value', function(mass3)
{
  m3.innerText = mass3.val();
});

function aa()
{
  var sendmassege1 = firebase.database().ref();
  var sendmassegetext1 = document.getElementById("m2").innerText;
  sendmassege1.child("massege1").set(sendmassegetext1);

  var sendmassege2 = firebase.database().ref();
  var sendmassegetext2 = document.getElementById("m3").innerText;
  sendmassege2.child("massege2").set(sendmassegetext2);

  var sendmassege3 = firebase.database().ref();
  var sendmassegetext3 = send.value;
  sendmassege3.child("massege3").set(sendmassegetext3);

  document.getElementById("send").value = "";
}
