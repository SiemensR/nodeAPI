function submitSuccess() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log('Successful data transfer');
      document.getElementById('send').appendClass('<div class="alert alert-danger" role="alert"> This is a danger alert with an example link. Give it a click if you like.</div>');
    }
  };
  let textform = document.getElementById("exampleFormControlInput2").value;
  let user = JSON.stringify({ textform: textform });
  xhttp.open("POST", "/creation", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  xhttp.send(user);
};


