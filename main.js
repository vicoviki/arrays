
let total = 0;
let seguirComprando = false;
let producto = 0;
let precio = 0;
let cantidad = 0;

class Producto {
    constructor(id, articulo, precio) {
        this.id = id;
        this.articulo = articulo;
        this.precio = precio;
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = []
const producto1 = new Producto(1, 'Poncho cambiador', '$10500');
const producto2 = new Producto(2, 'bolso Impermeable', '$5200');
const producto3 = new Producto(3, 'Parafina Ecologica agua fria ', '$2000');
const producto4 = new Producto(4, 'Parafina Ecologica agua caliente', '$2000');

productos.push(producto1, producto2, producto3, producto4);



const calcularPrecio = (precio) => {
    cantidad = Number(prompt('Elija la cantidad de productos que desea comprar: '));
    total += precio * cantidad;
    menu();
}

const menu = () => {

    do {
        producto = Number(prompt('Engrese la opcion de compra :\n1. Poncho cambiador \n2. Bolso Impermeable \n3. Parafina ecologica agua caliente \n4. Parafina ecologica agua fria\n5. Salir '));

        switch (producto) {
            case 1:
                precio = 10500;
                calcularPrecio(precio);
                break;

            case 2:
                precio = 5200;
                calcularPrecio(precio);
                break;

            case 3:
                precio = 2000;
                calcularPrecio(precio);
                break;

            case 4:
                precio = 2000;
                calcularPrecio(precio);
                break;

            case 5:
                if (total !== 0) {
                    alert('Gracias por su compra, el total a abonar es de ' + total)
                } else {
                    alert('No se cargo correctamente su compra')
                }
        }


        seguirComprando = confirm("¿Querés agregar otro producto a tu carrito ?");
    } while (producto !== 5);


}
menu();

