
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      quote: "Priyanshu is a world-class engineer. His deep understanding of Angular architecture and commitment to quality were instrumental in our project's success. A true asset to any team.",
      name: 'Jane Doe',
      title: 'Engineering Manager, TechCorp'
    },
    {
      quote: "Working with Priyanshu was a fantastic experience. He not only delivers flawless code but also elevates the entire team with his insights and collaborative spirit. Highly recommended.",
      name: 'John Smith',
      title: 'Senior Product Designer, Innovate Ltd.'
    },
    {
      quote: "His ability to tackle complex UI challenges and turn them into elegant, performant solutions is unmatched. Priyanshu's work on our new design system was simply outstanding.",
      name: 'Emily White',
      title: 'Lead Frontend Developer, Solutions Inc.'
    }
  ]);

  currentIndex = signal(0);

  selectTestimonial(index: number): void {
    this.currentIndex.set(index);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.testimonials().length);
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.testimonials().length) % this.testimonials().length);
  }
}