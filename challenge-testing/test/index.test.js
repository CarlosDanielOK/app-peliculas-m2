const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('Debe inicializar el carrito vacío', () => {
        expect(carrito.carrito).toEqual([]);
    });

    test('Debe agregar un producto al carrito', () => {
        const producto = { nombre: 'Manzana', precio: 10 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito.length).toBe(1);
        expect(carrito.carrito[0]).toEqual(producto);
    });

    test('Debe calcular el total correctamente', () => {
        carrito.agregarProducto({ nombre: 'Manzana', precio: 10 });
        carrito.agregarProducto({ nombre: 'Pan', precio: 20 });
        expect(carrito.calcularTotal()).toBe(30);
    });

    test('Debe aplicar un descuento correctamente', () => {
        carrito.agregarProducto({ nombre: 'Manzana', precio: 100 });
        const totalConDescuento = carrito.aplicarDescuento(10);
        expect(totalConDescuento).toBe(90);
    });
});