export interface User {
  user: {
    cuentas: {
      telegram: string,
      biblioteca: string,
      slack: string
    },
    email: string,
    rol: number
    insignias: [{
      nombre: string,
      descripcion: string,
      imagen: string,
      gif: string,
      conseguida: Date,
    }],
    username: string,
    picture: string;
    balance: number,
    status: string;
  };
}
