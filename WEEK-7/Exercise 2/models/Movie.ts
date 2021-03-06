import { v4 as uuidv4 } from 'uuid';

export class Movie {
  id: string = '';
  name: string;
  director: string;
  language: string;
  running_time: number;
  year: number;

  constructor(
    name: string,
    director: string,
    language: string,
    running_time: number,
    year: number
  ) {
    this.name = name;
    this.director = director;
    this.language = language;
    this.running_time = running_time;
    this.year = year;
    this.id = uuidv4();
  }
}