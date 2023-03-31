import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;
  private PhoneHeight: number = 250;

  constructor(private el: ElementRef) {
    this.setHight(180);
    this.setBorder("#f5f5f5");
  }

  @Input("pkmnBorderCard") borderColor: string; // alias
  @Input() pkmnBorderCard: string; // sans alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHight(height: number) {
    if (screen.width == 500) {
      this.el.nativeElement.style.height = this.defaultHeight + "px";
    } else {
      this.el.nativeElement.style.height = this.PhoneHeight + "px";
    }
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
