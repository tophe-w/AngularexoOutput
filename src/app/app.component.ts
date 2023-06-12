import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  OnomatopoeiaList: string[] = [];

  onReceiveOnomatopoeia(event: string): void {
  this.OnomatopoeiaList.push(event);

  }


}
