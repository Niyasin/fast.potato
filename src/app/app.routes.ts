import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'booking/:id',
    component: FormComponent,
    title: 'Booking'
  }];
