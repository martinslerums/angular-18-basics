import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  
  @Output() onBtnClicked = new EventEmitter();

  onClick() {
    this.onBtnClicked.emit()
  }
} 
