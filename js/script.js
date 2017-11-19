//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

  var config = {
    apiKey: "AIzaSyATiRsiPRE7RDRnVoVeOqpBFWuc7po54SM",
    authDomain: "my-portfolio-cb0ba.firebaseapp.com",
    databaseURL: "https://my-portfolio-cb0ba.firebaseio.com",
    projectId: "my-portfolio-cb0ba",
    storageBucket: "",
    messagingSenderId: "655685115416"
  };
  firebase.initializeApp(config);
  
  
  var firstName = firebase.database().ref("info.first-name");
  
  firstName.on('value', function(snapshot){
     console.log(snapshot.val()); 
     $(".name").html(snapshot.val());
  });
  
  
  