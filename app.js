
$(document).ready(function (){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWH7gUqZDGT89sZWjrjdDSKS_4Lm2PLVI",
    authDomain: "employee-sheet-3a923.firebaseapp.com",
    databaseURL: "https://employee-sheet-3a923.firebaseio.com",
    projectId: "employee-sheet-3a923",
    storageBucket: "employee-sheet-3a923.appspot.com",
    messagingSenderId: "1098245540479"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var bills

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var role = $("#role").val();
    var start = $("#startDate").val();
    var worked = $("#monthsWorked").val()
    var rate = $("#monthlyRate").val()
    console.log("Clicked")
    console.log()
    math();
    
    
    let dbAdd = {
        name: name,
        role: role,
        startDate: start,
        monthsWorked: worked,
        monthlyRate: rate,
    }
    tableAdd(dbAdd);
    function math(){
        var bills = $("#monthlyRate").val() * $("#monthsWorked").val()
        console.log(bills)
        return bills;
    }


    function tableAdd(data){
        console.log(data)

        $("#newData").append($("#newData").html("<tr><td id='data'>" + data.name + "</td><td id='data'>" + data.role + "</td><td id='data'>" + data.startDate + "</td><td id='data'>" + data.monthsWorked + "</td><td id='data'>" + bills + "</td></tr>"))
    }

    database.ref().push(dbAdd)
    // tableAdd(dbAdd);
    });

    database.ref().on("child_added", function(snapshot) {
        var newData = snapshot.val();
      });


});