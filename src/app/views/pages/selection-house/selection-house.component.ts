import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-selection-house',
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
  templateUrl: './selection-house.component.html',
  styleUrl: './selection-house.component.scss'
})
export class SelectionHouseComponent {

  constructor(
    private router: Router

  ) { }
  selectHouseType: string | undefined;
  ngOnInit(): void {
  }
  NavigateToSelectTion() {
    this.router.navigate(['/selection']);

  }
  NavigateToSelectionHouse(){
    this.router.navigate(['/prob']);
  }
  }