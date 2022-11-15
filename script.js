
        let iconos = []
        let contador=0;
        let selecciones = []
        let contado=document.getElementById('contador');
        generarTablero()

        function cargarIconos() {
            imagenes = [
                '<img src="img/prueba.jpg" heigh:"70%" width="70%">',
                '<img src="img/prueba2.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba3.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba4.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba6.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba7.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba8.jpg" heigh:"80%" width="80%">',
                '<img src="img/prueba9.jpg" heigh:"80%" width="80%">',
                '<img src="img/prueba10.jpg" heigh:"50%" width="50%">',
                '<img src="img/prueba11.jpg" heigh:"80%" width="80%">',
                '<img src="img/prueba12.jpg" heigh:"70%" width="70%">',
                '<img src="img/prueba13.jpg" heigh:"80%" width="80%">',
                '<i class="fas fa-star"></i>',
                '<i class="far fa-star"></i>',
                '<i class="fas fa-star-of-life"></i>',
                '<i class="fas fa-star-and-crescent"></i>',
                '<i class="fab fa-old-republic"></i>',
                '<i class="fab fa-galactic-republic"></i>',
                '<i class="fas fa-sun"></i>',
                '<i class="fas fa-stroopwafel"></i>',
                '<i class="fas fa-dice"></i>',
                '<i class="fas fa-chess-knight"></i>',
                '<i class="fas fa-chess"></i>',
                '<i class="fas fa-dice-d20"></i>',
            ]

            iconos=imagenes.sort(()=> Math.random()-0.5);
        }

        function generarTablero() {
            cargarIconos()
            selecciones = []
            let tablero = document.getElementById("tablero")
            let tarjetas = []
            for (let i = 0; i < 15; i++) {
                tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                        <div class="cara superior">
                        
                        </div>
                    </div>
                </div>        
                `)
                if (i % 2 == 1) {
                    iconos.splice(0, 1)
                }
            }
            tarjetas.sort(() => Math.random() - 0.5)
            tablero.innerHTML = tarjetas.join(" ")
            contado.innerHTML='<h4>Movimientos: '+contador+'</h4>'
        }

        function seleccionarTarjeta(i) {
            let tarjeta = document.getElementById("tarjeta" + i)
            if (tarjeta.style.transform != "rotateY(180deg)") {
                tarjeta.style.transform = "rotateY(180deg)"
                selecciones.push(i)
            }
            if (selecciones.length == 2) {
                let cartas= document.getElementsByClassName("area-tarjeta");

                deseleccionar(selecciones)
                selecciones = []
                contador++;
                contado.innerHTML='<h4>Movimientos: '+contador+'</h4>'
            }
        }

        function deseleccionar(selecciones) {
            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            if (trasera1.innerHTML != trasera2.innerHTML) {
                trasera1.style.background = "red"
                trasera2.style.background = "red"
            }

            setTimeout(() => {
                let trasera1 = document.getElementById("trasera" + selecciones[0])
                let trasera2 = document.getElementById("trasera" + selecciones[1])
                if (trasera1.innerHTML != trasera2.innerHTML) {
                    let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                    let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                    tarjeta1.style.transform = "rotateY(0deg)"
                    tarjeta2.style.transform = "rotateY(0deg)"
                }else{
                    trasera1.style.background = "green"
                    trasera2.style.background = "green"
                }
            }, 1000);
        }
