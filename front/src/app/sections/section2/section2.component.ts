import { Component } from '@angular/core';
import { Interface } from 'readline';

interface Cards {
  icon_c?:string
  title_c?:string
}
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})

export class Section2Component {

  products:Cards[]|undefined ;
  ngOnInit(){

    this.products = [
      {
        icon_c :  `pi-file-edit`,
        title_c : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!" 
      }
    ]
  }
}
