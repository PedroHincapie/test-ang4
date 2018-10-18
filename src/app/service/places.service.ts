import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  places = [
    { id: 1, name: 'Las olas del mar'},
    {id: 2, name: 'Los rios del abuela'}
  ];

  constructor() { }

  getPlaces() {
    return this.places;
  }
}
