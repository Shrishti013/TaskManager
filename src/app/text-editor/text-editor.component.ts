import { Component } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  title = 'Text-Editor';
  
  config: AngularEditorConfig = {
    editable : true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    minWidth:'10rem',
    placeholder: 'Enter text here ....',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
  }
}
