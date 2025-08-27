let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven-up"];

const gaseosasEnStock = dispenserGaseosas(gaseosas, unidades);
console.log(gaseosasEnStock);



function dispenserGaseosas(gaseosas, unidades) {
    const gaseosasEnStock = {};

    arregloGaseosas.forEach((gaseosa, index) => {
        gaseosasEnStock[gaseosa] = arregloCantidad[index];
    });

    return gaseosasEnStock;
}

