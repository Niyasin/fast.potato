import { CommonModule} from '@angular/common';
import { Component,inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ShowsService,Show } from '../shows.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  shows:Show[]=[];
  ShowsService:ShowsService = inject(ShowsService);

  constructor(){
    this.shows=this.ShowsService.getAll();
  }
}