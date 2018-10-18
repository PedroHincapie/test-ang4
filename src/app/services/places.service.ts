import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  places = [
    {id: 1, name : 'La bomba del amparo'},
    {id: 2, name : 'Las malas'},
    {id: 3, name : 'Donde el sebas'},
    {id: 4, name : 'La bomba'},
  ];

  constructor() { }

  getplaces() {
    return this.places;
  }
}
