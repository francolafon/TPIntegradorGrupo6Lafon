
//Barra de navegacion flotante

window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".barranav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });


  const elementosNav = document.querySelectorAll(".barranav a");
  elementosNav.forEach((elemento) => {
    elemento.addEventListener("click", () => {
      // Eliminar la clase "selected" de todos los elementos de la barra de navegación
      elementosNav.forEach((elemento) => {
        elemento.classList.remove("selected");
      });
  
      // Agregar la clase "selected" al elemento activo
      elemento.classList.add("selected");
    });
  });

//boton ENVIAR

function enviarDatos(){
     var doc = new jsPDF('p', 'pt','letter');
     var margin = 10;
     var scale = (doc.internal.pageSize.width - margin *2) / document.body.scrollWidth;
     doc.html(document.body, {
      x:margin,
      y: margin,
      html2canvas: {
        scale: scale,

      },
      callback: function(doc){
        doc.output('dataurlnewwindow', {filename: 'fichero-pdf.pdf'})
      }
     })
}
//boton IMPRIMIR ORDEN
function imprimirDatos(){
  var doc = new jsPDF('p', 'pt','letter');
  var margin = 10;
  var scale = (doc.internal.pageSize.width - margin *2) / document.body.scrollWidth;
  doc.html(document.body, {
   x:margin,
   y: margin,
   html2canvas: {
     scale: scale,

   },
   callback: function(doc){
     doc.save("formulario.pdf")
   }
  })
}
