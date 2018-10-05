var Account = (function(){

    var loginDialog = document.querySelector('#login-dialog');
    var createAccountDialog = document.querySelector('#create-account-dialog');
    var loggedIn = false;

    // Create Account function.  Writes account info to firebase.
    function submitCreateAccount() {
        var displayName = document.querySelector("#entry-displayname");
        var email = document.querySelector("#entry-email");
        var password = document.querySelector("#entry-password");

        if (validate([displayName, email, password])) {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(function() {
                console.log("Account creation success");
                // updateProfile is a firebase function that can update a user's basic profile information
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: displayName.value
                });
                // Closes the account creation box and the login dialog box
                createAccountDialog.close();
                closeLoginDialog();
            }, function (e) {
                console.error("Account creation error", e);
            });
        }
        else {
            //todo
            // var data = {message: "Must enter valid name and email.  Passwords must be 4 characters or longer."};
            // UI.snackbar(data);
        }
    }

    // Logs the user in with email and password
    function signInWithEmailandPassword(){
        var email = document.querySelector("#email");
        var password = document.querySelector("#password");

        if (validate([email, password])) {
            // This calls firebase's signInWithEmailAndPassword's function as opposed to this one
            firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(function(user) {
                console.log ("Sign in successful with user: " + user);
            }, function(e){
                console.error("Sign in error", e);
            });
            closeLoginDialog();
        }
        else {
            //todo
            // var data = {message: "All fields required"};
            // UI.snackbar(data);
        }
        

    }

    // Log in with google TODO
    function signInWithGoogle(googleUser) {
        var credential = firebase.auth.GoogleAuthProvider.credecntial({
            'idToken': googleUser.getAuthResponse().id_token
        });
        firebase.auth().signInWithCredential(credential);

    }

    // When the users authentication state changes, like logging in and out
    // This will autmatically run from the listener set in the init function
    function authStateChangeListener(user) {
        if (user) {
            loggedIn = true;
            closeLoginDialog();
            document.querySelector("#login").style.display = "none";
            document.querySelector("#logout").style.display = "block";
            Chat.onlogin();
            // Game.onlogin();
        }
        else {   // log out
            if (loggedIn) {
                loggedIn = false;
                window.location.reload();
            }
        }
    }

    // Closes the log-in dialog box
    function closeLoginDialog() {
        var dialog = document.querySelector('#login-dialog')
        if (dialog.open)
            dialog.close();
    }

    
    // Helper function to check if any credential is left blank
    function validate(arr) {
        valid = true;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value == "") {
                valid = false;
                arr[i].parentElement.classList.add("is-invalid");
            }
            else
                arr[i].parentElement.classList.remove("is-invalid");
        }
        return valid;    
    }

    // public functions
    return {
        // Initialize all authentication elements
        init: function() {
            firebase.auth().onAuthStateChanged(authStateChangeListener);
            // showModal() makes the user not able to interact with other elsements like a pop up box or an alert
            // Login button on top right
            document.querySelector("#login").addEventListener("click", function (){
                loginDialog.showModal();
            });
            // Logout button to top right
            document.querySelector("#logout").addEventListener("click", function(){
                firebase.auth().signOut();
                var logoutMessage = $("<li>");
                logoutMessage.html("<b>You have succesfully signed out!</b>");
                Chat.messageList.append(logoutMessage);
            }, function(e) {
                console.error("Logout error", e);            
            });
            // Sign in button in the login window
            document.querySelector("#sign-in").addEventListener("click", signInWithEmailandPassword);
            // Google sign in from icon
            document.querySelector("#google-signin img").addEventListener("click", signInWithGoogle);
            // Pop up create account dialog box when create account button is pressed
            document.querySelector('#create-account').addEventListener("click", function() {
                createAccountDialog.showModal();
            });
            // Create user account once create button is pressed
            document.querySelector("#entry-submit").addEventListener("click", submitCreateAccount);  
        },
    }
})();