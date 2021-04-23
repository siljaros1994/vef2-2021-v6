// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  mass: number;
  height: number;
  hairColor: string;
  eyeColor: string;
  birthYear: string;
  id: string;
  name?: string;
  // TODO fleiri týpur
}

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
