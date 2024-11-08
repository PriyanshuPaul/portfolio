import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './header.component.html',
    selector: 'app-header'
})

export default class HeaderComponent
{
    public iconArray = [faLinkedin,faGithub,faInstagram]
    public onNavOptionClick(icon:any) {
        console.log('hello',icon.iconName)
    }
}