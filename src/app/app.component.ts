import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistapp';
  object = {
    id: 1,
    name: 'habibi'
  };

  list = ['aku', 'ich', 'I'];
}
