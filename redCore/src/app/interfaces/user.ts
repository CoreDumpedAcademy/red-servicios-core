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
      id: number
    }],
    username: string,
    picture: string;
    balance: number,
    status: string;
  };
}
