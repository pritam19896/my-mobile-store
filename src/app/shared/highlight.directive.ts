import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input() hightlightColor: string;
  @Input('appHighlight') hightlightColor: string;

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover')
  onMouseover() {
    this.elRef.nativeElement.style.backgroundColor = this.hightlightColor || 'yellow';
  }

  @HostListener('mouseleave')
  onMouseleave() {
    this.elRef.nativeElement.style.backgroundColor = null;
  }

}
