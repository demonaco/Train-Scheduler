var firebaseConfig = {
    apiKey: "AIzaSyCjt08ZdWW2AGyhuUASckAliJt_7EeERZs",
    authDomain: "train-scheduler-6fcad.firebaseapp.com",
    databaseURL: "https://train-scheduler-6fcad.firebaseio.com",
    projectId: "train-scheduler-6fcad",
    storageBucket: "train-scheduler-6fcad.appspot.com",
    messagingSenderId: "46413369280",
    appId: "1:46413369280:web:49d16de603dcd163608225",
    measurementId: "G-Z6QS05HLD6"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

$(document).ready(function(){
$("button").on("click", function(){
    event.preventDefault();
    console.log("hello");
// var train1input = $("#formGroupExampleInput").val().trim();
// console.log("hello");
// $("#p1").text(train1input);



















})
});