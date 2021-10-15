import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  notes:any=[];

  constructor() { }

  addNotes(notes:any) {
    this.notes.push(notes);
  }

  getNotes() {
    return this.notes;
  }
}
