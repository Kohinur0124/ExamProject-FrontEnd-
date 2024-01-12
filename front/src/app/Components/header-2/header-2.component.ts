import { Component } from '@angular/core';




@Component({
  selector: 'app-header-2',
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.css'
})
export class Header2Component {
  rangeDates: Date[] | undefined;
  value: number | undefined;
  rangeValues: number[] = [13000, 150000];
}



