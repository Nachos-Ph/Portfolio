function myFunction() {
    var x = document.getElementById("myTopnav");
    var icon = document.querySelector(".topnav .icon");
    
    if (x.className === "topnav") {
      x.className += " responsive";
      icon.classList.add("animate");
      x.style.backgroundColor = "#04AA6D"; 
    } else {
      x.className = "topnav";
      icon.classList.remove("animate");
      x.style.backgroundColor = "#333"; 
    }
  }
  
  
  window.addEventListener("resize", function() {
    var x = document.getElementById("myTopnav");
    var icon = document.querySelector(".topnav .icon");
  
    if (window.innerWidth > 600) { 
      x.className = "topnav"; 
      icon.classList.remove("animate");
      x.style.backgroundColor = "#333"; 
    }
  });
  