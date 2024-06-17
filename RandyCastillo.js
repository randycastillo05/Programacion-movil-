const clientes = [
    {
      id: 1,
      nombre: "Alfredo Mota",
      direccion: "Calle santa #3",
      telefono: "829-634-5678",
      correo: "motaCasador@gmail.com",
      servicios: [
        {
          nombre: "Disney",
          estado: true
        },
      ]
    },
    {
      id: 2,
      nombre: "Esperanza Gomez",
      direccion: "Avenida 400",
      telefono: "809-631-6582",
      correo: "gonzalez@gmail.com",
      servicios: [
        {
          nombre: "Netflix",
          estado: true
        },
      ]
    },
   
    {
        id: 3,
        nombre: "Alejandro Martines",
        direccion: "stg este #15",
        telefono: "849-661-6587",
        correo: "lilmartines@gmail.com",
        servicios: [
          {
            nombre: "PRIME",
            estado: true
          },
          {
            nombre: "Youtube Music",
            estado: false
          },
        ]
    },
    {
        id: 4,
        nombre: "Armando Ramires",
        direccion: "vista catalina c#4",
        telefono: "829-081-7058",
        correo: "Ramires87@gmail.com",
        servicios: [
          {
            nombre: "NBA PASS",
            estado: false
          },
        ]
    },
    {
        id: 5,
        nombre: "Randy Castillo",
        direccion: "Villa Hermosa",
        telefono: "809-550-8455",
        correo: "randycas@gmail.com",
        servicios: [
          {
            nombre: "NETFLIX",
            estado: false
          },
          {
            nombre: "Spotify",
            estado: true
          },
        ]
    },

    ];
    for (const cliente of clientes) {
        console.log(`Cliente: ${cliente.nombre}`);
        for (const servicio of cliente.servicios) {
            console.log(`Su Servicio: ${servicio.nombre} esta ${servicio.estado ? "Activo" : "Inactivo"}`);
            //console.log(`Su Estado: ${servicio.estado ? "Activo" : "Inactivo"}`);
        }
        console.log("----------------------");
    }
