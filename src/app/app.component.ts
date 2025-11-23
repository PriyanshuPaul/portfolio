import { Component } from '@angular/core';
import HeroComponent from './components/hero/hero.component';
import HeaderComponent from './components/header/header.component';
@Component({
    selector: 'app-root',
    imports: [HeaderComponent, HeroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

}
