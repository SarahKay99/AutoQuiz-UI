import { Component } from '@angular/core';

// Component Metadata AKA Decorator
@Component({
  selector: 'pm-root',
  template: 
  `<nav>
    <a class="navbar-brand">{{ title }}</a>
    <ul class='nav navbar-nav'>
      <li><a class='nav-link' [routerLink]="['./welcome']">Home</a></li>
      <li><a class='nav-link' [routerLink]="['./products']">Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

// Class
export class AppComponent {
  title: string = 'AutoQuiz UI';
}