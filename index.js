class Usuario {
    constructor(nombre,apellido,libros = [], mascotas = []){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName = () => `${this.nombre}${this.apellido}`;
    addMascota= mascota => {
        this.mascotas.push(mascota);
    };
    countMascotas = () => this.mascotas.length;
    addBook = (nombre, autor) => this.libros.push({nombre,autor});
    gatBookNames = () => this.libros.map(libro => libro.nombre);
}

const Usuario = new Usuario(
    'Mateo',
    'Gayo',
    [
        {nombre:'Moby-Dick' autor: 'Hernan Melville'},
        {nombre: 'Hamlet' autor: 'William Shakespeare'}
    ],
    ['perro']
);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());

usuario.addBook ('Martín Fierro', 'José Hernández');

console.log(usuario. getBookNames());