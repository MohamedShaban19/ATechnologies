import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';
import { ContainerComponent, RowComponent, ColComponent, CardComponent, CardBodyComponent, CardGroupComponent } from '@coreui/angular';

@Component({
  selector: 'app-selection',
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
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent implements OnInit {
  constructor(
    private router: Router

  ) { }
  favCity: string | undefined;
  ngOnInit(): void {
  }
  NavigateToHouse() {
    this.router.navigate(['/house-parent']);

  }
  NavigateToSelectionHouse(){
    this.router.navigate(['/selection-house']);

  }
}
