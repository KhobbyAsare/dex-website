import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-cards.component.html',
  styleUrl: './post-cards.component.scss',
})
export class PostCardsComponent {
 
  numberOfImages:number[] = [1,2,3,4,5,6,7,8,9,10];
}
