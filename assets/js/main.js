
const switcher = document.getElementById("switcher");
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  
  switcher.addEventListener("change", function() {
    if (this.checked) {
      div1.style.display = "none";
      div2.style.display = "grid";
    } else {
      div1.style.display = "grid";
      div2.style.display = "none";
    }
  });
  
  window.addEventListener("load", function() {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
  
    div1.style.display = "grid";
    div2.style.display = "none";
  });