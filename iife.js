

//  6. IIFE (Immediately Invoked Function Expression)
// it's call it selfe imediatily.
// in real life is like  IIFE ni nko kugira umuntu uza akavuga ijambo rimwe maze agaceceka burundu.
// Ntabwo akeneye izina, nta bwo agomba gusubirwamo, yaje gusa gukora akazi gato ako kanya.

// examples (and it keep secreat )

const secret = (function () {
    const pin = 1234;
    return {
      getPin: function () {
        return pin;
      },
    };
  })();
  
  console.log(secret.getPin()); // 1234
  console.log(pin); 
  
