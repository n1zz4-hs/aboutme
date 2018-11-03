function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var languages = document.getElementsByClassName('language');
console.log(languages);


var currentLang = document.getElementById('current-lang');
console.log(currentLang);

for(var i = 0; i < languages.length; i++) {
    languages[i].addEventListener("onclick", function() {     
        if(languages[i].href.slice(0) == "ukr") {
            currentLang.innerHTML = "укр";
        };
        if(languages[i].href.slice(0) == "eng") {
            currentLang.innerHTML = "eng";
        };
        if(languages[i].href.slice(0) == "rus") {
            currentLang.innerHTML = "рус";
        };
    })
};

var btnContainer = document.getElementsByClassName("main-menu")[0];

var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";
    });
}