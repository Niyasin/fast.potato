import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HomeComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tick';
}
