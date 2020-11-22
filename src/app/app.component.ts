import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>PonyRacer {{user?.name}}</h1>
  <ns-racer></ns-racer>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: any = {name: 'Cedric'};
}
