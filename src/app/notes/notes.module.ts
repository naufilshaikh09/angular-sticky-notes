import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    EditorModule
  ]
})
export class NotesModule { }
