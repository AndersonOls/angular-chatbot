import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.types';
import { ChatResponseComponent } from '../chat-response/chat-response.component';

@Component({
  selector: 'app-chat-dialog',
  standalone: true,
  imports: [
    ChatResponseComponent
  ],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.css'
})
export class ChatDialogComponent {
  @Input() messages: Message[] = [];
}
