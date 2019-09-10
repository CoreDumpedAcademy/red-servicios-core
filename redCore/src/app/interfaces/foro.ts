import { Pregunta } from './pregunta';

export interface Foro {
  title: string;
  description: string;
  members: [string];
  preguntas: [Pregunta];
  created: Date;
  admins: [string];
}
