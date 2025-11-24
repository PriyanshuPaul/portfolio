import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnDestroy {
  fullCode = `
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio-hero',
  template: \`
    <div class="hero-container">
      <h1>{{ name() }}</h1>
      <p>{{ title() }}</p>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioHeroComponent {
  name = signal('Priyanshu Paul');
  title = signal('Senior Frontend Engineer');
}
  `;

  displayedCode = signal('');
  private typingInterval: any;

  ngOnInit(): void {
    let i = 0;
    this.displayedCode.set('');

    this.typingInterval = setInterval(() => {
      if (i < this.fullCode.length) {
        this.displayedCode.update(val => val + this.fullCode.charAt(i));
        i++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, 40); // Typing speed in milliseconds
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
}