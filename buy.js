const mostrar = document.getElementById('show');


show.addEventListener('click', () =>{  
    swal({
        title: "Estas seguro de realizar la compra?",
        text: "AL REALIZAR LA COMPRA TOMALE CAPTURA A LOS PRODUCTOS ELEGIDOS",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            title:"Compra realizada",
            icon: "success",
            text: "DALE CLICK AL LOGO DE WHATSAPP PARA CONTACTARTE CON EL VENDEDOR PARA ENVIAR LAS CAPTURAS Y CULMINAR LAS COMPRAS", 
          });
        } else {
          swal({
            title:"La compra no ha sido efectuada",
            icon: "error",
            text: "Realiza correctamente la compra"
          });
        }
      });
})
