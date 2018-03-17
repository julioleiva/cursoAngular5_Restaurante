import { Directive, ElementRef, HostListener, Input, Output, EventEmitter , Attribute} from '@angular/core';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[shadow]'
})

export class ShadowDirective {

    @Input () color = '#ff3333';
    @Output () shadowMouseLeave: EventEmitter<any> = new EventEmitter;

    constructor(private el: ElementRef, @Attribute('size') private size: string = '5px') {
    }
    @HostListener ('mouseenter')
    showShadow() {
        this.el.nativeElement.style = `box-shadow: ${this.size} ${this.size} ${this.size} ${this.color}`;
    }
    @HostListener ('mouseleave')
    hiddenShadow() {
        this.el.nativeElement.style = 'inherit';
        this.shadowMouseLeave.emit();
    }
}
