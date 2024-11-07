import { Component } from "@angular/core";
@Component({
    standalone: true,
    templateUrl:'./hero.component.html',
    selector: 'app-hero',
    imports:[]
})
export default class HeroComponent {
    public imagePath='assets/hero.jpg'
}