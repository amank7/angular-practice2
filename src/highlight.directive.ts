import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

  @HostListener('mouseenter') onHover(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onLeave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'purple');
  }
}
