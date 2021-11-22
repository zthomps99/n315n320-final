
function initListeners() {
    $(".nav-container .nav-holder .links a").click(function(e){
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    });
}

function initFirebase(){
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      _db = firebase.firestore();
      console.log("auth change logged in");
      if(user.displayName){
        $(".name").html(user.displayName);
      }

      $(".yourRecipeButton").prop("disabled", false);
      userExists = true;
    }else{
      _db = "";
      console.log("auth change logged out");
      $(".name").html("");
      $(".yourRecipeButton").attr("disabled", true);
      userExists = false;
      userFullName = "";
    }
  });
}

function signOut(){
  firebase.auth().signOut()
    .then(() => {
      console.log("signed out");
      $(".login-button").html("Login");
    })
    .catch((error) => {
      console.log("Error Signing Out ");
    });
}

function signUp(){
  let fName = $("#fName").val();
  let lName = $("#lName").val();
  let email = $("#email").val();
  let pw = $("#pw").val();
  let fullName = fName + " " + lName;
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: email,
    lists: [],
  };
  console.log("create " + fName + ' ' + lName + ' ' + email + ' ' + pw);

  firebase.auth().createUserWithEmailAndPassword(email, pw)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("created");
    firebase.auth().currentUser.updateProfile({
      displayName: fullName,
    });

    _db.collection("Users").doc(user.uid).set(userObj).then((doc) => {
      console.log("doc added ");
    })  
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('create error ' + errorMessage);
    });

    userFullName = fullName;
    $(".name").html(userFullName);
    $("fName").val("");
    $("lName").val("");
    $("email").val("");
    $("pw").val("");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('create error ' + errorMessage);
  });
}

function login() {
  let email = $("#log-email").val();
  let pw = $("#log-pw").val();

  firebase.auth().signInWithEmailAndPassword(email, pw)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log('logged in');
    $(".login-button").html(`Logout`);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('logged in error ' + errorMessage);
  });
}

function signIn(){
  firebase.auth().signInAnonymously()
  .then(() => {
    console.log("signed in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error Signing In " + errorMessage);
  });
}



$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListeners();
  }catch(error){
    console.log("error ", error);
  }

  MODEL.changePageContent("home");
});