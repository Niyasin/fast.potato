import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seat-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.scss'
})

export class SeatSelectorComponent {
  
  @Output() select = new EventEmitter();
  
  layout = [
    [1,  2,  3,  4,  5,  0,  0,  6,  7,  8,  9, 10,  0,  0, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 0,  0, 21, 22, 23, 24, 25, 0,  0, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 0,  0, 36, 37, 38, 39, 40, 0,  0, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 0,  0, 51, 52, 53, 54, 55, 0,  0, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 0,  0, 66, 67, 68, 69, 70, 0,  0, 71, 72, 73, 74, 75],
    [76, 77, 78, 79, 80, 0,  0, 81, 82, 83, 84, 85, 0,  0, 86, 87, 88, 89, 90]
  ]
  
  selected = new Set();
  handleSelect(i:number){
    if(this.selected.has(i)){
      this.selected.delete(i);
    }else{
      this.selected.add(i); 
    }
    this.select.emit(Array.from(this.selected));
  }


  getOffset(i:number){
    let len = this.layout[0].length-1
    let val = len-Math.abs(len/2-i)
    return Math.sqrt(Math.abs(len*len/4-val*val))*2
  }

  getRot(i:number){
    let len = this.layout[0].length-1
    let val = len/2-i
    return val*1.5
  }

}


