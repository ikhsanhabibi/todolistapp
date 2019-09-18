import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = ['Angular 4', 'React', 'JS'];
  newItem = '';
  pushItem = function() {
    // tslint:disable-next-line:triple-equals
    if (this.newItem != '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  };

  removeItem = function(index) {
    this.items.splice(index, 1);

  };

}
