import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent, RowComponent, ColComponent, CardBodyComponent, CardComponent, CardGroupComponent } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';


@Component({
  selector: 'app-house-parent',
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
    CardGroupComponent  ], templateUrl: './house-parent.component.html',
  styleUrl: './house-parent.component.scss'
})
export class HouseParentComponent implements OnInit {
  constructor(
    private router: Router

  ) { }
  ngOnInit(): void {
  }
  selectedValue: string | undefined;
  NavigateToSelection(
  ) {
    this.router.navigate(['/selection']);

  }

}
