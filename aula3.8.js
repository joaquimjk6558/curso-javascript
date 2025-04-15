const lampada = {
    ligada : false,
    ligar: function () {
lampada.ligada = true;
console.log ("a lampada foi ligada!")
},
desligar : function () {
lampada.ligada = false;
console.log ("a lampada foi desligada")
}
};
lampada.ligar();
lampada.desligar();