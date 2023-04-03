import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'Click me!';

  ngOnInit() {
    console.log('Init');
  }

  onClick(): void {
    console.log('Button clicked!');
  }
}
