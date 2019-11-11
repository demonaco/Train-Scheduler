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
//initialize app
firebase.initializeApp(firebaseConfig);

//create database
var database = firebase.database();
//global variables that will hold values
var train = "";
var destination = "";
var frequency = "";
var arrival = "";
var minutes = "";


//getting the doc ready and setting up on click function
$(document).ready(function () {
    $("button").on("click", function () {
        event.preventDefault();
        console.log("hello");
        // var train1input = $("#formGroupExampleInput").val().trim();
        // console.log("hello");
        // $("#p1").text(train1input);
        train = $("#trainInput").val().trim();
        console.log("below is the train input")
        console.log(train)
        destination = $("#destinationInput").val().trim();
        first = $("#firstTrain").val().trim();
        frequency = $("#frequencyInput").val().trim();
        console.log(frequency);
        //database save
//object to send info up to firebase
        database.ref().set({
            train: train,
            destination: destination,
            first: first,
            frequency: frequency,
            minutes: minutes,
            arrival: arrival
        });
    })
})
//take snapshot of values that we can have returned to us
    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());

        var train = snapshot.val().train;
        var destination = snapshot.val().destination;
        var frequency = snapshot.val().frequency;
        // var arrival = snapshot.val().arrival;
        // var minutes = snapshot.val().minutes;

        console.log(train)
        console.log(destination)
        console.log(frequency)
        //moment.js
// frequency + first time = next arrival
// next arrival - frequency = minutes away

        var now = moment();
        console.log(now)

        trainMoment = moment()

        // var trainStarted = $("#firstTrain").val().trim();
        // var trainMoment = moment(trainStarted, "HH:mm");
        // var freqMoment = $("#frequencyInput").val().trim();
        // var howFast = moment(freqMoment, "HH:MM");
        // console.log(trainMoment + howFast);
    
        var freqMoment = $("#frequencyInput").val().trim();
        var trainStarted = $("#firstTrain").val().trim();

        var trainStartedConverted = moment(trainStarted, "HH:mm").subtract(1, "years");
        console.log(trainStartedConverted);

        var now = moment();
        console.log ("The current time is " + moment(now).format("HH:mm"));

        var diffTime = moment().diff(moment(trainStartedConverted), "minutes");
        console.log("DIFFERENCE IN TIME IS " + diffTime);

        var remainder = diffTime % freqMoment;
        console.log(remainder);

        var arrival = freqMoment - remainder;
        console.log("MINUTES TILL TRAIN "+ arrival);

        var minutes = moment().add(arrival, "minutes").format("mm");
        console.log("ARRIVAL TIME " + moment(minutes).format("HH:mm"));



    // var arrival =  moment().diff(moment(frequency, "X")).format("minutes");
    //     var start = moment.unix
    //     var minutes = start + frequency
    //   var arrival = minutes.moment().endOf('day').fromNow();
 
            //create new rows with user info
            var userRow = $("<tr>").append(
                $("<td>").text(train),
                $("<td>").text(destination),
                $("<td>").text(frequency),
                $("<td>").text(arrival + " minutes"),
                $("<td>").text(minutes + " minutes"),
);
$("tbody").append(userRow);
        // var userInput = $("<th>");
        // userInput.attr("scope", "row");
        // userInput.attr("id", "trainName")
        // var info = $("<td>");
        // info.attr("id", "location");
        // var freq = $("<td>");
        // freq.attr("id", "minutes")
        // userInput.text(snapshot.val().train) + info.text(snapshot.val().destination) + info.text(snapshot.val().arrival) + freq.text(snapshot.val().frequency);
    function erroObj(errorObject) {
        console.log("The read failed: " + errorObject.code);
    }
});