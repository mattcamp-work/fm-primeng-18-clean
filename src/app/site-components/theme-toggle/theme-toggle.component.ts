import { Component, Renderer2, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})

export class ThemeToggleComponent implements OnDestroy {
  private readonly className = 'fm-dark-mode';

  constructor(private renderer: Renderer2) {}

  toggleClass(): void {
    const htmlElement = document.documentElement; // <html>
    if (htmlElement.classList.contains(this.className)) {
      this.renderer.removeClass(htmlElement, this.className);
    } else {
      this.renderer.addClass(htmlElement, this.className);
    }
  }

  addClass(): void {
    const htmlElement = document.documentElement;
    this.renderer.addClass(htmlElement, this.className);
  }

  removeClass(): void {
    const htmlElement = document.documentElement;
    this.renderer.removeClass(htmlElement, this.className);
  }

  ngOnDestroy(): void {
    // Clean up by ensuring the class is removed when the component is destroyed
    this.removeClass();
  }
}
