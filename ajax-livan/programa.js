
$('#boton-enviar').click(function(){

  $.get("https://my-json-server.typicode.com/Dimiorz/api-server/pacientes", function(datos, status){
    $.each(datos, function (ind, elem) {
      $('.dato-tabla').append("<tr><td>" + elem.nombre + "</td><td>" + elem.apellido + "</td><td>"+ elem.covid + "</td><td>" + elem.ciudad + "</td></tr>");
    });

  });
});
