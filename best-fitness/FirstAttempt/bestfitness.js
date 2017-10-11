account = {"MohammedRashid" : "Password1", "SamuelLin" : "Password1", "JosephD" : "Password1"}

function printAccounts() {
  keys = Object.keys(account)
  for(var i = 0; i < keys.length; i++){
    console.log("Username" + keys[i] + " Password: " + account[keys[i]])
  }
}

function NewAccount() {
  AccountName = document.getElementById("NewUsername").value;
  Password = document.getElementById("NewPassword").value;
  if (Password.length >= 8){
    if (account[AccountName] == undefined){
      localStorage.setItem(AccountName, Password);
      window.location="homepage.html"
    }
    else
      document.getElementById("out").innerHTML = "Username already exists"
  }
  else
    document.getElementById("out").innerHTML = "Password has to be at least 8 characters"
}

function Login() {
  AccountName = document.getElementById("Username").value;
  Password = document.getElementById("Password").value;
  if (account[AccountName] == Password)
    window.location="clientpage.html"
  else
    document.getElementById("out").innerHTML = "Incorrect Username or Password"
}

function ForgotPassword() {
  //Figure out later
}
