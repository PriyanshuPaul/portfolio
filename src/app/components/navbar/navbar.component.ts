import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './navbar.component.html',
    selector: 'app-navbar'
})

export default class NavbarComponent
{
    public iconArray = [faLinkedin,faGithub,faInstagram]
    public onNavOptionClick(icon:any) {
        console.log('hello',icon.iconName)
    }
}