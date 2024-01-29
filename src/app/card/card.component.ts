import { Component, Input } from '@angular/core';
import { Show } from '../shows.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private router :Router){}
  @Input() show!:Show
  hadleClick(id:number){
    this.router.navigate(['booking',id])
  }
}
