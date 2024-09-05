import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-next-prob',
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
  templateUrl: './next-prob.component.html',
  styleUrls: ['./next-prob.component.scss']
})
export class NextProbComponent implements OnInit {
  emailContent: string | undefined 
  inputContent: string | undefined 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emailContent = localStorage.getItem('emailContent') || 'Default email content';
    this.inputContent = localStorage.getItem('inputContent') || 'Default input content';
    console.log(this.emailContent)
    console.log(this.inputContent)
  }
  NavigateToProb(){
    this.router.navigate(['/prob']);
  }
  NavigateToSubmission(){
    this.router.navigate(['/submission']);
  }
  
}
