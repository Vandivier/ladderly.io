import {
    Component,
    OnDestroy,
    AfterViewInit,
    Output,
    EventEmitter,
    ElementRef,
} from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
    selector: 'ngx-tiny-mce',
    template: '',
})
export class TinyMCEComponent implements OnDestroy, AfterViewInit {
    @Output() editorKeyup = new EventEmitter<any>();

    editor: any;
    tinymce: any;

    constructor(
        private host: ElementRef,
        private locationStrategy: LocationStrategy
    ) {}

    // ref: https://github.com/tinymce/tinymce-angular/blob/master/tinymce-angular-component/src/main/ts/TinyMCE.ts
    getTinymce() {
        const w = typeof window !== 'undefined' ? (window as any) : undefined;
        return w && w.tinymce ? w.tinymce : null;
    }

    ngAfterViewInit() {
        this.tinymce = this.getTinymce();
        if (this.tinymce) {
            this.tinymce.init({
                target: this.host.nativeElement,
                plugins: ['link', 'paste', 'table'],
                skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
                setup: editor => {
                    this.editor = editor;
                    editor.on('keyup', () => {
                        this.editorKeyup.emit(editor.getContent());
                    });
                },
                height: '320',
            });
        }
    }

    ngOnDestroy() {
        if (this.tinymce) {
            this.tinymce.remove(this.editor);
        }
    }
}
