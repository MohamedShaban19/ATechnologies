import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-submission-confirm',
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CommonModule,
    FormsModule,
    MatRadioModule,
    CardComponent,
    CardBodyComponent,
    CardGroupComponent,
  ], 
  templateUrl: './submission-confirm.component.html',
  styleUrl: './submission-confirm.component.scss'
})
export class SubmissionConfirmComponent implements OnInit {
  constructor(private router: Router){

  }
  showCircle: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      document.querySelector('.confirmed-circle')?.classList.add('show');
    }, 1000); // Delay for demonstration; adjust or trigger as needed
  }

  NavigateToSubmission(){
    this.router.navigate(['/next-prob'])

  }
}
