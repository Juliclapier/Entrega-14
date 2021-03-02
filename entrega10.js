
  var inputUno = document.getElementById("nombre")
  var inputDos = document.getElementById("pass")
  
  function mostrar(inputUno,inputDos) {
        
  
      return (inputDos.value, inputUno.value)
    }
  
      function mostrarDos (){
       $(".div-click").click(mostrarDos)
  
         if(inputDos.value != 'clapier' && inputUno.vale !='juliana'){
          document.getElementById("saludo").innerHTML= "Usuario incorrecto"
        }
      else {document.getElementById("saludo").innerHTML= "Usuario correcto"}
      }
    
    function ajax(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/Javascrypt10/Entrega-10/enviodatos.html'

http.onReadyStateChange = function(){
  if(this.readyState == 4 && this.status == 200){
    // console.log(this.responseText)
    document.getElementById("response").innerHTML=this.responseText
  }
}
    http.open("GET",url);
  http.send();

    }


document.getElementById("boton").addEventListener("click",function(){
ajax();
})
