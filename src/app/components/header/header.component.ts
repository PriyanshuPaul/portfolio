import { Component } from "@angular/core";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
    imports: [],
    templateUrl: './header.component.html',
    selector: 'app-header'
})

export default class HeaderComponent {
    public iconArray = [faLinkedin, faGithub, faInstagram]
    public onNavOptionClick(icon: any) {
        console.log('hello', icon.iconName)
    }
}