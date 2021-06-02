import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  noteArray = [{}]; color = "#ecebed";
  menu = [{ id: 1, name: "level1" }, { id: 2, name: "level2" }, { id: 3, name: "level3" },]
  constructor() { }

  ngOnInit(): void {
  }

  selectedIdx = 0;
  selectItem(index: number): void {
    this.selectedIdx = index;
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
