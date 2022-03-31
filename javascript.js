
//Luo ruksi listaelementin poistamista varten ja lisää se jokaiseen listaelementtiin
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

//Klikkaa ruksia piilottaaksesi kyseisen listaelementin
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Lisää "tehty"-symboli, kun listaelementtiä klikataan
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Luo uusi listaelementti klikkaamalla "Lisää"-painiketta
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var inputBox = document.querySelector('input');
  li.appendChild(t);

  if (inputValue === '') {
    alert("Sinun täytyy kirjoittaa jotain!");
    inputBox.style.borderWidth = "2px";
    inputBox.style.borderColor = "red";
  } else if (inputValue.length < 3) {
    alert("Syötteen pituuden tulee olla vähintään kolme merkkiä pitkä!");
    inputBox.style.borderWidth = "2px";
    inputBox.style.borderColor = "red";
  } else {
    document.getElementById("myUL").appendChild(li);
    inputBox.style.borderWidth = "0px";
    localStorage.setItem("Tehtävä", "inputValue");
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

