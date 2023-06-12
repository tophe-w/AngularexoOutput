import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopoeia',
  templateUrl: './create-onomatopoeia.component.html',
  styleUrls: ['./create-onomatopoeia.component.scss']
})
export class CreateOnomatopoeiaComponent {

  newOnomatopoeia: string = '';

  @Output() sendOnomatopoeiaToParent: EventEmitter<string> = new EventEmitter<string>();

  createOnomatopoeia(): void {
    this.sendOnomatopoeiaToParent.emit(this.newOnomatopoeia);
    this.newOnomatopoeia = '';
  }


}
