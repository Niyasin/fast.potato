import { Component, inject } from '@angular/core';
import { SeatSelectorComponent } from '../seat-selector/seat-selector.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Show, ShowsService } from '../shows.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SeatSelectorComponent,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  showID = 0;
  ShowsService : ShowsService = inject(ShowsService);
  show:Show =this.ShowsService.get(this.showID);
  constructor(private router :Router){
    this.showID=Number(this.route.snapshot.params['id']);
    this.show = this.ShowsService.get(this.showID);
  }
  formData = {
    name:'',
    email:'',
    phone:'',
    country:'',
    selectedSeats:[]
  }
  
  handleSelect(value:any){
    this.formData.selectedSeats = value;
  }
  
  handleNameInput(event:KeyboardEvent){
    this.formData.name = (event.target as HTMLInputElement).value;
  }

  handleEmailInput(event:KeyboardEvent){
    this.formData.email = (event.target as HTMLInputElement).value;
  }

  handleCountryInput(event:KeyboardEvent){
    this.formData.country = (event.target as HTMLInputElement).value;
  }

  handlePhoneInput(event:KeyboardEvent){
    this.formData.phone = (event.target as HTMLInputElement).value;
  }

  handleCancel(){
    this.router.navigate(['/'])
  }

}
