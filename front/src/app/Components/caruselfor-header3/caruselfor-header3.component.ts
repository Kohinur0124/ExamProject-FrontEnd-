import { Component } from '@angular/core';
class Product {
  image?:string
  name?: string;
  
}


@Component({
  selector: 'app-caruselfor-header3',
  templateUrl: './caruselfor-header3.component.html',
  styleUrl: './caruselfor-header3.component.css'
})
export class CaruselforHeader3Component {

  products: Product[] = [];

  responsiveOptions: any[] | undefined;


  ngOnInit() {
      this.products=
        [
          {
             
              image:"https://pp-karat.ru/Bas/b2.jpg",
              
              name: 'С бассейном',
              
          },
          {
              image:"https://cdn-img.readytotrip.com/t/1024x768/extranet/c9/33/c93317789befbe0e0f50c6a27d6456397d37601a.jpeg",  
              name: 'Семейные и уютные',
              
          },
          {
              image:"https://www.techniciansgroup.com/wp-content/uploads/2020/04/how-to-make-alexa-the-center-of-your-smart-home-1.jpg",
              name: 'Хиты продаж',
             
          },
          {
              image:"https://milana-m.kz/files/uploads/img/registration_works_6.jpg",  
              name: 'Под свадьбы и корпоративы',
             
          },
          {
             
              image:"https://live24.ru/wp-content/themes/yootheme/cache/fa/1594653846_2-fa93a94d.webp",
              name: 'С русской баней на дровах',
             
          },
      ];

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warning';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }
}
