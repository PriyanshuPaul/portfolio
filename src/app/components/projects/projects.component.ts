import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'Enterprise Design System',
      description: 'Architected and led the development of a scalable design system in Angular, serving 15+ product teams.',
      tech: 'Angular, TypeScript, Storybook',
      imageUrl: 'https://picsum.photos/seed/project1/600/400'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Built a high-performance dashboard with RxJS for real-time data visualization and complex state management.',
      tech: 'Angular, RxJS, NgRx, D3.js',
      imageUrl: 'https://picsum.photos/seed/project2/600/400'
    },
    {
      title: 'E-commerce PWA',
      description: 'Developed a feature-rich Progressive Web App, focusing on performance, offline capabilities, and accessibility.',
      tech: 'Angular, Signals, PWA, Jest',
      imageUrl: 'https://picsum.photos/seed/project3/600/400'
    },
  ]);
}