import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface titles {
  icons:string,
  texts:string
};


@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.css'
})
export class Section4Component {

  titless :titles[] =[
    {
      icons : "/assets/buffet 1 (Traced).png",
      texts : "Кейтеринг",
    },
    {
      icons : "/assets/chef (Traced).png",
      texts : "Выездной повар",
    },
    {
      icons : "/assets/cocktail 1 (Traced).png",
      texts : "Фуршет",
    },
    {
      icons : "/assets/confetti (Traced).png",
      texts : "Шоу программа",
    },
    {
      icons : "/assets/Frame 14 (Traced).png",
      texts : "Трансфер",
    },
    {
      icons : "/assets/microphone (Traced).png",
      texts : "Мероприятия под ключ",
    },
    
  ]
}
