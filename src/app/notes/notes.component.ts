import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  noteArray = [{}]; color = "#8fa555";
  constructor() { }

  ngOnInit(): void {
  }

  onAddNote() {
    this.noteArray.push({});
  }

  onRemoveNote(index: number) {
    this.noteArray.splice(index, 1);
    if (this.noteArray.length == 0)
      this.onAddNote();
  }
}
