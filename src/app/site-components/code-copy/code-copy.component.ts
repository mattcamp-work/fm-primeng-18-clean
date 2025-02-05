import { Component, Input, signal } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-code-copy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-copy.component.html',
  styleUrl: './code-copy.component.scss'
})
export class CodeCopyComponent {
  @Input() text: string = 'Default text';
  @Input() styleClass: string = '';
  @Input() prefix: string = '';
  @Input() kind: string = '';
  copied = signal(false);

  copyFeedback?: string = '';

  constructor(private clipboard: Clipboard) {}

  copyToClipboard() {
    this.clipboard.copy(this.text);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000); // Reset after 2 seconds
  }
}
