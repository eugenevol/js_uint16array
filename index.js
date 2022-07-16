var myArray = new ArrayBuffer(512);
var longInt8View = new Uint16Array(myArray);
longInt8View[0]=444
alert (longInt8View[0])