import { Component } from '@angular/core';

import { PrimengImportsModule } from '~app/primeng-imports/primeng-imports-fixed.module';

@Component({
  selector: 'app-chat-demo',
  standalone: true,
  imports: [PrimengImportsModule],
  templateUrl: './chat-demo.component.html',
  styleUrl: './chat-demo.component.scss'
})
export class ChatDemoComponent {

  messages:any = [
    { text: 'Hello! How can I help you?', isUser: false },
    { text: 'I need assistance with my order.', isUser: true },
  ];
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, isUser: true });
      this.newMessage = '';

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ text: 'Let me check that for you.', isUser: false });
      }, 1000);
    }
  }


}
