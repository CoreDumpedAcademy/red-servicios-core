import { Respuesta } from './respuesta';

export interface Pregunta {
  user: {
    username: string,
    picture: string
  };
  title: string;
  text: string;
  published;
  solved: boolean;
  datewhenSolved;
  respuestas: [Respuesta];
}
