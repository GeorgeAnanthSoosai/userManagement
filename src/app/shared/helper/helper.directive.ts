import { Directive, ViewContainerRef } from '@angular/core';

/**
 * Helper placeholder created for angular dynamic component creation(Angular Element)
 */
@Directive({
    selector: '[appPlaceholder]'
})
export class AppPlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {

    }
}