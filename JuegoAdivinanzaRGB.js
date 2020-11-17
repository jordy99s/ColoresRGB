var colores = generarColoresAleatorios(6);
var numCuadros = 6;
var cuadros = document.querySelectorAll(".cuadro");
var colorSeleccionado = colores[3];
var colorMostrado = document.getElementById("colorMostrado");
var mensaje = document.querySelector("#mensaje");
var h1 = document.querySelector("h1");
var btnReset = document.getElementById("reset");
var btnFacil = document.getElementById("btnFacil");
var btnDificil = document.getElementById("btnDificil");

btnFacil.addEventListener("click", function(){
    btnDificil.classList.remove("seleccionado");
    btnFacil.classList.add("seleccionado");
    numCuadros = 3;
    colores = generarColoresAleatorios(numCuadros);
    colorSeleccionado = seleccionarColor();
    colorMostrado.textContent = colorSeleccionado;
    for(var i = 0; i < cuadros.length; i++){
        if(colores[i]){
            cuadros[i].style.backgroundColor = colores[i];
        }else{
            cuadros[i].style.display = "none";
        }
    }
});

btnDificil.addEventListener("click", function(){
    btnFacil.classList.remove("seleccionado");
    btnDificil.classList.add("seleccionado");
    numCuadros = 6;
    colores = generarColoresAleatorios(numCuadros);
    colorSeleccionado = seleccionarColor();
    colorMostrado.textContent = colorSeleccionado;
    for(var i = 0; i < cuadros.length; i++){
        cuadros[i].style.backgroundColor = colores[i];
        cuadros[i].style.display = "block";
    }
});

btnReset.addEventListener("click", function(){
    //Generar colores nuevos
    colores = generarColoresAleatorios(numCuadros);
    //Seleccionar un color aleatorio del arreglo
    colorSeleccionado = seleccionarColor();
    //Cambiar el color mostrado por el color seleccionado
    colorMostrado.textContent = colorSeleccionado;
    this.textContent = "Colores Nuevos";
    mensaje.textContent = "";
    //Cambiar los colores de los cuadros
    for(var i = 0; i < cuadros.length; i++){
        cuadros[i].style.backgroundColor = colores[i];
    }
    h2.style.backgroundColor = "steelblue";
});

colorMostrado.textContent = colorSeleccionado;

for(var i = 0; i<cuadros.length; i++){
    //Agregar colores iniciales
    cuadros[i].style.backgroundColor = colores[i]
    //Agregar escuchadores de eventos a cada cuadro
    cuadros[i].addEventListener("click", function(){
        //Tomar color del cuadro seleccionado
        var colorClickeado = this.style.backgroundColor;
        //Comparar con color seleccionado
        if(colorClickeado === colorSeleccionado){
            mensaje.textContent = "Correcto!";
            btnReset.textContent = "Volver a jugar?";
            cambiarColores(colorClickeado);
            h1.style.backgroundColor = colorClickeado;
        }else{
            this.style.backgroundColor = "#232323";
            mensaje.textContent = "Intente de nuevo!";
        }
    });
    h1.style.backgroundColor = "#232323";
}

function cambiarColores(color){
    //Recorrer todos los cuadros
    for(var i = 0; i < cuadros.length; i++){
        //Cambiar cada color para que coincida con el color dado
        cuadros[i].style.backgroundColor = color;
    }
}

function seleccionarColor(){
    //Seleccionar un número aleatorio
    //entre 1 y el tamaño del arreglo de colores (Puede ser 3 ó 6)
    var aleatorio = Math.floor(Math.random() * colores.length);
    return colores[aleatorio];
}

function generarColoresAleatorios(num){
    //Crear arreglo
    var arr = []
    //Repetir num veces
    for(var i = 0; i < num; i++){
        //Agregar num de colores aleatorios al arreglo
        arr.push(colorAleatorio());
    }
    //Retornar arreglo
    return arr
}

function colorAleatorio(){
    //Seleccionar R (Rojo) 0 - 255
    var r = Math.floor(Math.random() * 256);
    //Seleccionar G (Verde) 0 - 255
    var g = Math.floor(Math.random() * 256);
    //Seleccionar B (Azul) 0 - 255
    var b = Math.floor(Math.random() * 256);
    //Generar la cadena "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}