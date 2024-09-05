import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-submission',
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
  ],  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent implements OnInit {
  constructor(private router: Router){

  }
  progressValue: number = 0;

  ngOnInit() {
    this.startProgress();
  }
  NavigateToProb(){
    this.router.navigate(['/next-prob'])

  }

  startProgress() {
    let interval = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 1; 
      } else {
        clearInterval(interval);
        this.router.navigate(['/submission-confirm']); 
      }
    }, 50); 
  }
}