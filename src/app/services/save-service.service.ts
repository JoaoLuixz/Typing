import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveServiceService {
  savedPhrases = [];
  constructor() { }
}
