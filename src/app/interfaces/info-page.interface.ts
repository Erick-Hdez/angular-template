
export interface InfoPage {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  tumblr?: string;
  equipo_trabajo?: Equipo[];
}

export interface Equipo {
  frase: string;
  nombre: string;
  subtitulo: string;
  twitter: string;
  url: string;
}