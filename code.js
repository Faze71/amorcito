window.onload = function() {
  alert("Hola, mi amor. Espero que te guste esta sorpresa.");
};


var estado = "normal";

// Crear la variable visto
var visto = false;

function mostrarBroma() {
  var x = document.getElementById("btnInicial");
  var y = document.getElementById("btnBroma");
  
  // Ocultar el botón inicial
  x.style.display = "none";

  // Obtener la posición aleatoria
  var posX = Math.floor(Math.random() * window.innerWidth);
  var posY = Math.floor(Math.random() * window.innerHeight);

  // Cambiar la posición del botón broma
  y.style.position = "absolute";
  y.style.left = posX + "px";
  y.style.top = posY + "px";

  // Mostrar el botón broma
  y.style.display = "inline";
}

function mostrarTexto() {
  var x = document.getElementById("texto");
  var y = document.getElementById("btnBroma");
  
  if (estado == "normal") {
    estado = "broma";
    
    // Verificar el valor de visto
    if (visto == false) {
      var posX = Math.floor(Math.random() * window.innerWidth);
      var posY = Math.floor(Math.random() * window.innerHeight);
     
      y.style.position = "absolute";
      y.style.left = posX + "px";
      y.style.top = posY + "px";
      
      // Cambiar el valor de visto a true
      visto = true;
    } else {
      // Cambiar el texto del botón broma
      y.innerHTML = "Haz click aquí";
    }
    
    // Borrar el botón broma
    y.remove();

    // Mostrar el texto y la imagen
    x.style.display = "block";
  } else {
    estado = "normal";
    
    x.style.display = "block";
  }
}
