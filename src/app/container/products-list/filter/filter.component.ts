import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all:number = 0;
  @Input() inStock:number = 0;
  @Input() notInStock:number = 0;

  @Output() SelectedFilterRadioButton: EventEmitter<string> = new EventEmitter<string>();

  selectedRadioButton: string = 'all'

  onSelectedFilterRadioButton(){
    // console.log(this.selectedRadioButton);
    this.SelectedFilterRadioButton.emit(this.selectedRadioButton);
  }
}
