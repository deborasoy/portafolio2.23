document.addEventListener("DOMContentLoaded", ()=> { 
   //boton envio de la recomendacion
 document.getElementById("btnPost").addEventListener("click", ()=> addRecommendation());
  //boton de la alerta informativa
 document.getElementById("btnValidation").addEventListener("click", ()=> divAlert.classList.add("d-none")); 
 });

const divAlert = document.getElementById("alert");

function addRecommendation() {
  const div = document.getElementById("allRecommendations"); //div recomendaciones
  const recommendation = document.getElementById("textRecommendation");//textarea
  

    if (recommendation.value != null && recommendation.value.trim() != "") {
       //mostrar alerta informativa
       divAlert.classList.remove("d-none")
      // Nueva recomendacion templeate
      let templeate= `
      <div class="card bg-body-secondary border-light-subtle  m-2 col-4">
      <div class="card-body">
        <p class="card-text lead">
          <span>&#8220;</span>${recommendation.value}<span>&#8221;</span>
           </p>
    </div>
  </div>
      `
      div.innerHTML += templeate
      // resetear el valor del textarea
      recommendation.value=" ";

    }
  };
   