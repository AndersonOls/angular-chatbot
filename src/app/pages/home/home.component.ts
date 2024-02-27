import { Component } from '@angular/core';
import { ArrowRightComponent } from '../../icons/arrow-right/arrow-right.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}

  openChat(){
    this.router.navigate(["chat"])
  }

}
