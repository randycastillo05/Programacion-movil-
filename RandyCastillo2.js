
class Vehiculo {
    constructor(marca, modelo, año,matricula,color) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.matricula = matricula;
      this.color=color;
    }
    VerDetalles() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
    encender() {
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
    apagar() {
      console.log(`${this.marca} ${this.modelo} está apagado.`);
    }
    EnMovimiento() {
        console.log(`${this.marca} ${this.modelo} está en movimiento.`);
      }
  }
  class Coche extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
      super(marca, modelo, año); 
      this.puertas = puertas;

    }
    LucesEncendidas() {
      console.log(`${this.marca} ${this.modelo} está encendida la luz.`);
    }
  }
  
  class Moto extends Vehiculo {
    constructor(marca, modelo, año, tipo) {
      super(marca, modelo, año); 
      this.tipo = tipo;
    }
    Calibrar() {
      console.log(`${this.marca} ${this.modelo} levante la goma del frente`);
    }
  }
  
  
  const miCoche = new Coche('Ford', 'Mustang', 2020, 2);
  miCoche.VerDetalles();
  miCoche.encender(); 
  const miCoche2 = new Coche('Dodge', 'Charge', 2020, 4);
  miCoche2.VerDetalles();
  miCoche2.encender(); 
  miCoche2.LucesEncendidas
  
  
  
  const miMoto = new Moto('Suzuki', 'Gsx', 2022, 'Deportiva');
  miMoto.VerDetalles(); 
  miMoto.encender(); 
  miMoto.EnMovimiento();
  miMoto.Calibrar();
  
  const miMoto2 = new Moto('Yamaha ', 'Tracer900', 2022, 'Deportiva');
  miMoto2.VerDetalles(); 
  miMoto2.encender(); 
  miCoche2.apagar