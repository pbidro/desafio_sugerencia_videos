const videoLoader = (() => {
  const cargar_video = (url, id) => {
    let iframe = document.getElementById(id);
    iframe.src = url;
  };

  const call = (url, id) => {
    cargar_video(url, id);
  };

  return call;
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }
  get url() {
    return this._url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la url del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    videoLoader(this.url, this.id);
  }
  setInicio(tiempo) {
    let sufix = `?start=${tiempo}`;
    let new_url = `${this.url}${sufix}`;
    videoLoader(new_url, this.id);
  }
}

const musica = new Reproductor(
  "https://www.youtube.com/embed/0DXI_ooetEo",
  "musica"
);

musica.playMultimedia();
musica.setInicio(20);

const pelicula = new Reproductor(
  "https://www.youtube.com/embed/O21wD8Tzr2k",
  "peliculas"
);
pelicula.playMultimedia();
pelicula.setInicio(40);

const serie = new Reproductor(
  "https://www.youtube.com/embed/0qSarZpylxs",
  "series"
);
serie.playMultimedia();
serie.setInicio(44);