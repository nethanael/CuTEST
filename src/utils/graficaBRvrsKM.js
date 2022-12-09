// Este Script contiene las funciones que crean los arrays necesarios para hacer las graficas.
// El array graficaInicial contiene la curva inicial con toda la distancia de 0 a 5KM
// El array graficaCustom contiene una grafica "aumentada" de 5 puntos calcula apartir del paramentro dB reportado
// por el usuario.

// Grafica Inicial

    export function crearGrafica (calculoBitrate){    // Esta funcion recibe como props la funcion que trae la formula para la plataforma requerida.
        let graficaInicial = [];
        let km = 0.0;
        let valor = 0;

        for (let t = 0; t < 50; t++)                                                     // itera la cantidad de veces que necesitemos (5kms)
        {                                                            
            valor = calculoBitrate(km);                                                 //calcula bitrate por medio de funcion                                           
            graficaInicial.push({"elapsed": km.toFixed(2) + " km", "Kbps 1": valor});   // empuja datos al array, crea un punto
            km = km + 0.1;                                                              // aumenta de 100m en 100m
        }
        return graficaInicial;
    };
// Grafica Custom "aumentada"

    export function crearGraficaCustom (calculoBitrate, km, errorValue){
        let graficaCustom = [];
        let valor = 0;
        let amplitud = 0.2;                                         //resolucion de distancias a graficar 0.1 representa 100m
        let kmTest = (km - amplitud); 

        for (let i = 0; i < 5; i++)                               // itera la cantidad de veces que necesitemos (5 puntos)
        {                                                            
            valor = calculoBitrate(kmTest);                                                                             //calcula bitrate por medio de funcion                                           
            graficaCustom.push({"elapsed": kmTest.toFixed(2) + " km", "Kbps 1": valor.toFixed(2), "Kbps 2": (valor - errorValue).toFixed(2)});  // empuja datos al array, crea un punto
            kmTest = kmTest + 0.1;                                                                                      // aumenta de 100m en 100m
        }
        return graficaCustom;
    };

    // Grafica Inicialvdsl

    export function crearGraficaVDSL (calculoBitrate){    // Esta funcion recibe como props la funcion que trae la formula para la plataforma requerida.
        let graficaInicial = [];
        let km = 0.0;
        let valor = 0;

        for (let t = 0; t < 29; t++)                                                     // itera la cantidad de veces que necesitemos (5kms)
        {                                                            
            valor = calculoBitrate(km);                                                 //calcula bitrate por medio de funcion                                           
            graficaInicial.push({"elapsed": km.toFixed(2) + " km", "Kbps 1": valor});   // empuja datos al array, crea un punto
            km = km + 0.1;                                                              // aumenta de 100m en 100m
        }
        return graficaInicial;
    };