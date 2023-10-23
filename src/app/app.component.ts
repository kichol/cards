import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    { title: 'tree', imageUrl: 'assets/tree.jpeg', userName: 'Michel', content: 'I saw this once' },
    { title: 'hike', imageUrl: 'assets/mountain.jpeg', userName: 'Bruno', content: 'I was there' },
    { title: 'tree', imageUrl: 'assets/biking.jpeg', userName: 'Janine', content: 'I want to ride my bicycle' },
  ];
}
