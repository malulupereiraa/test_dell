$(document).ready(function () {
	
	var element1 = document.getElementById("divResourceLinks").getElementsByClassName("container")[0]; 
	element1.classList.add("container-fluid");
	element1.classList.remove("container");
	
  var element2 = document.getElementById("divResourceLinks").getElementsByClassName("container-fluid")[0].getElementsByClassName("row")[0]; 
	element2.appendChild(
  document.getElementById('divEnterpriseProductLinks'));

  var divNova1 = document.createElement("div");
  divNova1.classList.add("col-6");
  divNova1.classList.add("newDiv1");
  
  var divNova2 = document.createElement("div");
  divNova2.classList.add("col-6");
  divNova2.classList.add("newDiv2");
  
  var divNova3 = document.createElement("div");
  divNova3.classList.add("row");
  divNova3.classList.add("newDiv3");
    
  element2.appendChild(
  divNova1);
  
  element2.appendChild(
  divNova2);
  
   document.getElementsByClassName("newDiv1")[0].appendChild(divNova3);
  
  var element3 = document.getElementById("divResourceLinks").getElementsByClassName("container-fluid")[0].getElementsByClassName("row")[0].getElementsByClassName("col-lg-3");
  
  for(let a = 0; a < element3.length; a++) {
      document.getElementsByClassName("newDiv3")[0].appendChild(document.getElementById('divResourceLinks').getElementsByClassName("col-lg-3")[a]);
  }
  
    for(let a = 0; a < element3.length; a++) {
      document.getElementsByClassName("newDiv3")[0].appendChild(document.getElementById('divResourceLinks').getElementsByClassName("col-lg-3")[a]);
  }
  
    for(let a = 0; a < element3.length; a++) {
      document.getElementsByClassName("newDiv3")[0].appendChild(document.getElementById('divResourceLinks').getElementsByClassName("col-lg-3")[a]);
  }
  document.getElementById('divEnterpriseProductLinks').querySelector("h3").remove();
  var element4 = document.getElementById('divEnterpriseProductLinks').querySelectorAll(".col-md-6");
  for(let j = 0; j < element4.length; j++) {
    element4[j].classList.add("col-md-12");
  element4[j].classList.remove("col-md-6");
  }
  
  
  document.getElementsByClassName("newDiv2")[0].appendChild(document.getElementById('divEnterpriseProductLinks').getElementsByClassName("pb-md-14")[0]);
  
  document.getElementById("divEnterpriseProductLinks").remove();
  
  var element5 = document.getElementById('divResourceLinks').getElementsByClassName("col-lg-3");
  
  for(let b = 0; b < element5.length; b++) {
    element5[b].classList.add("col-lg-6");
    element5[b].classList.remove("mb-lg-0");
  }
  
  for(let b = 0; b < element5.length; b++) {
    element5[b].classList.add("col-lg-6");
    element5[b].classList.remove("mb-lg-0");
  }
  
  for(let b = 0; b < element5.length; b++) {
    element5[b].classList.add("col-lg-6");
    element5[b].classList.remove("mb-lg-0");
  }
  
  
  
})