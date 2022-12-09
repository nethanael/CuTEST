
// Este script contiene todas las funciones creadas para el calculo de BitRates, pasar de dB´s a KM´s y margenes de error
// Cada plataforma tiene tres funciones:    // Calculo de BitRate
                                            // Pasar de dB´s a KM´s
                                            // Margen de error

//***************************************************************** ADSL ***************************************************
//**************************************************************SAMSUNG ADSL************************************************
  
  /* ------------------- bitrate Samsung ADSL--------------------------------------- */
	
  export function calculoBrADSLSamsung(km) {
    let bitRate = 0;
      if (km < 1.2)
      {
          bitRate = (-1.6651 * Math.pow(km, 2) + 1.1721 * km + 24.458)*1000;
      } 
          else {
              bitRate = (-0.15595 * Math.pow(km, 4) + 2.2743 * Math.pow(km, 3) - 10.051 * Math.pow(km, 2) + 8.7455 * km + 23.782)*1000;
      }
      return parseFloat(bitRate.toFixed(0)); 
  };

    /*----------------- dBs a KMs para Samsung ADSL -----------------------------------*/

    export function pasoDBaKMADSLSamsung(dbF) {
        let distanciaDB = 0;
        if (dbF < 25)
        {
            distanciaDB = (dbF-2.4088)/19.492;
        } 
            else {
                distanciaDB = (dbF-8.7576)/14.077;	
        }
        return parseFloat(distanciaDB.toFixed(2)); 
    };

    /* ------------------- Margen de error para Samsung ADSL--------------------------- */
	
    export function errorADSLSamsung() {
        let  errorValue = (5 * 0.25)*1000;                          // constante de error
          return errorValue; 
      };

/*********************************************************** IMAP ADSL ****************************************************************************

    /* ------------------- bitrate IMAP ADSL Volius-------------------- */
        
    export function calculoBrADSLImap(kmF) {
        let bitRate = 0;
        if (kmF < 1.2)
        {
            bitRate = (-2.4198 * Math.pow(kmF, 2) + 1.6292 * kmF + 23.507)*1000;
        } 
            else {
                bitRate = (-0.2973 * Math.pow(kmF, 4) + 4.1279 * Math.pow(kmF, 3) - 18.948 * Math.pow(kmF, 2) + 26.808 * kmF + 10.352)*1000;
            }
        return parseFloat(bitRate.toFixed(0)); 
    };

    /*----------------- dBs a KMs para IMAP ADSL -----------------------------------*/

    export function pasoDBaKMADSLImap(dbF) {
        let distanciaDB = 0;
		if (dbF < 25)
		{
			distanciaDB = (dbF-3.2047)/18.663;
		} 
			else {
				distanciaDB = (dbF-9.0079)/14.097;	
        }
		return parseFloat(distanciaDB.toFixed(2)); 
    } 

    /* -------------------  margen de error para Samsung ADSL-------------------- */

    export function errorADSLImap() {
        let  errorValue = (5 * 0.25)*1000;                          // constante de error
            return errorValue; 
    };

/*********************************************************** NAM ADSL ****************************************************************************

    /* ------------------- bitrate NAM ADSL Volius-------------------- */

    export function calculoBrADSLNam(kmF) {
        let bitRate = 0;
        if (kmF < 1.2)
        {
            bitRate = (-0.4128 * Math.pow(kmF, 2) - 0.4867 * kmF + 24.25) * 1000;
        } 
            else {
                bitRate = (-0.229 * Math.pow(kmF, 4) + 3.2579 * Math.pow(kmF, 3) - 14.987 * Math.pow(kmF, 2) + 19.046 * kmF + 16.158) * 1000;
        }
        return parseFloat(bitRate.toFixed(0)); 
    } 

    /*----------------- dBs a KMs para NAM ADSL -----------------------------------*/

    export function pasoDBaKMADSLNam(dbF) {
        let distanciaDB = 0;
        if (dbF < 23)
        {
            distanciaDB = (dbF-3.6552)/17.856;
        } 
            else {
        distanciaDB = (dbF-7.6784)/14.556;	
        }
        return parseFloat(distanciaDB.toFixed(2)); 


    }  

    /* -------------------  margen de error para NAM ADSL-------------------- */

    export function errorADSLNam() {
        let  errorValue = (5 * 0.25)*1000;                          // constante de error
            return errorValue; 
    };

/*********************************************************** MSAN ADSL HUAWEI ****************************************************************************

    /* ------------------- bitrate MSAN ADSL Huawei -------------------- */

    export function calculoBrADSLMsanHuawei(kmF) {
        let bitRate = 0;
		if (kmF < 1.2)
		{
			bitRate = (0.00000000000002 * (kmF) + 24.528) * 1000;
		} 
			else {
				bitRate = (-0.3433 * Math.pow(kmF, 4) + 4.6568 * Math.pow(kmF, 3) - 20.824 * Math.pow(kmF, 2) + 28.086 * kmF + 13.577) * 1000;
        }
		return parseFloat(bitRate.toFixed(0)); 
    } 

    /*----------------- dBs a KMs para MSAN ADSL HUAWEI -----------------------------------*/

    export function pasoDBaKMADSLMsanHuawei(dbF) {
        let distanciaDB = 0;
		if (dbF < 24)
		{
			distanciaDB = (dbF-1.7655)/19.002;
		} 
			else {
				distanciaDB = (dbF-8.6316)/13.503;	
        }
		return parseFloat(distanciaDB.toFixed(2)); 
    }  

    /* -------------------  margen de error para MSAN ADSL HUAWEI-------------------- */

    export function errorADSLMsanHuawei() {
        let  errorValue = 5 * 0.18 * 1000;                           // constante de error
            return errorValue; 
        };

/*********************************************************** MSAN ADSL Calix ****************************************************************************

    /* ------------------- bitrate E7 ADSL Calix -------------------- */

    export function calculoBrADSLMsanCalix(kmF) {
        let bitRate = 0;
        if (kmF < 1.2)
        {
            bitRate = (-2.9664 * Math.pow(kmF, 2) + 2.3047 * kmF + 29.219) * 1000;
        } 
            else {
                bitRate = (-0.2445 * Math.pow(kmF, 4) + 3.464 * Math.pow(kmF, 3) - 15.737 * Math.pow(kmF, 2) + 18.362 * kmF + 22.82) * 1000;
        }
        return parseFloat(bitRate.toFixed(0)); 
    } 

    /*----------------- dBs a KMs para MSAN ADSL Calix -----------------------------------*/

  export function pasoDBaKMADSLMsanCalix(dbF) {
    let distanciaDB = 0;
    if (dbF < 23.5)
    {
        distanciaDB = (dbF-0.6783)/19.755;
    } 
        else {
            distanciaDB = (dbF-7.1942)/13.76;	
    }
    return parseFloat(distanciaDB.toFixed(2)); 
    }  

    /* -------------------  margen de error para MSAN ADSL CALIX-------------------- */

    export function errorADSLMsanCalix() {
        let  errorValue = 5 * 0.30 * 1000;  
            return errorValue; 
        };



//***************************************************************** VDSL ***************************************************
//**************************************************************MSAN CALIX VDSL************************************************

    /* ------------------- bitrate E7 VDSL Calix -------------------- */

    export function calculoBrVDSLMsanCalix(kmF) {
        let bitRate = 0;
		if (kmF < 0.5)
		{
			bitRate = (-579.74 * Math.pow(kmF, 3) + 250.97 * Math.pow(kmF, 2) - 37.24 * kmF + 110)*1000;
		} 
			else {
				bitRate = (6.209 * Math.pow(kmF, 4) - 47.464 * Math.pow(kmF, 3) + 137.84 * Math.pow(kmF, 2) - 202.28 * kmF + 153.04)*1000;
        }
		return parseFloat(bitRate.toFixed(0)); 
  } 

    /*----------------- dBs a KMs para MSAN VDSL Calix -----------------------------------*/

    export function pasoDBaKMVDSLMsanCalix(dbF) {
        let distanciaDB = 0;
		if (dbF < 20.2)
		{
			distanciaDB = (dbF-4.0714)/34.514;
		} 
			else {
				distanciaDB = (dbF-14.248)/15.186;	
        }
		return parseFloat(distanciaDB.toFixed(2)); 
    }  

    /* -------------------  margen de error para MSAN VDSL CALIX-------------------- */

    export function errorVDSLMsanCalix() {
        let  errorValue = (2 * 1.63)*1000;                                 // constante de error 
            return errorValue; 
    };

//**************************************************************MSAN HUAWEI VDSL************************************************

    /* ------------------- bitrate MSAN VDSL huawei -------------------- */

    export function calculoBrVDSLMsanHuawei(kmF) {
        let bitRate = 0;
		if (kmF < 0.5)
		{
			bitRate = ( -232.02 * Math.pow(kmF, 3) - 238.85 * Math.pow(kmF, 2) + 40.731 * kmF + 138.22)*1000;
		} 
			else {
				bitRate = (-1.549 * Math.pow(kmF, 4) + 7.3334 * Math.pow(kmF, 3) + 6.1936 * Math.pow(kmF, 2) - 77.624 * kmF + 106.6)*1000;
        }
		return parseFloat(bitRate.toFixed(0)); 
  } 

    /*----------------- dBs a KMs para MSAN VDSL Huawei -----------------------------------*/

    export function pasoDBaKMVDSLMsanHuawei(dbF) {
    let distanciaDB = 0;
		if (dbF < 21.4)
		{
			distanciaDB = (dbF-5.181)/34.743;
		} 
			else {
				distanciaDB = (dbF-15.8)/14.822;	
        }
		return parseFloat(distanciaDB.toFixed(2)); 
    }  

    /* -------------------  margen de error para MSAN VDSL Huawei-------------------- */

    export function errorVDSLMsanHuawei() {
        let  errorValue = (5 * 0.92)*1000;                                  // constante de error 
            return errorValue; 
    };
    
/*--------------------------------------------funcion para crear el parrafo resultado ------------------------------------*/

    export function resultadoBuilder (inputData, nuevoKM, nuevoBR, errorValue) 
    {
        const parrafoFinal = `Atenuación reportada: ${inputData} dBs. Distancia ideal según curva: ${nuevoKM} Kms. La capacidad de canal óptima es: ${nuevoBR} Kbps. (${ (nuevoBR/1024).toFixed(2) } Mbps) Capacidad de canal mínima: ${ (nuevoBR - errorValue).toFixed(2) } Kbps ( ${ ((nuevoBR-errorValue)/1024).toFixed(2) } Mbps)`;
		return parrafoFinal;
	};