function submitSuccess() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("exampleFormControlTextarea1").value = this.responseText;
        }
      };
    xhttp.open("GET", "/creation", true);
    xhttp.send();
}; 


