import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  display: boolean = false;
  authUsers(){}
  authUser(){}


  showDialog() {
    this.display = true;
}
}
