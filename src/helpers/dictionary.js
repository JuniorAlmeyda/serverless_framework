const Polyglot = require('node-polyglot')

const polyglot = new Polyglot();

polyglot.extend({
  "name": "nombre",
  "height": "altura",
  "mass": "peso",
  "hair_color": "color_cabello",
  "skin_color": "color_piel",
  "eye_color": "color_ojos",
  "birth_year": "anio_nacimiento",
  "gender": "genero",
  "homeworld": "mundo_natal",
  "films": "peliculas",
  "species": "especies",
  "vehicles": "vehiculos",
  "starships": "naves_estelares",
  "created": "creado",
  "edited": "editado",
  "url": "url"
});

module.exports = polyglot;