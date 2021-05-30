import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fieldArray: Array<any> = [
    {
    }
  ];
  newAttribute: any = {};

  onAdd() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  onRemove(index: number) {
    debugger
    this.fieldArray.splice(index, 1);
    if (this.fieldArray.length == 0)
      this.onAdd();
  }

}
