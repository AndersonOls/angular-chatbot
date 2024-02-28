import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-response',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chat-response.component.html',
  styleUrl: './chat-response.component.css'
})
export class ChatResponseComponent {
  @Input() message!: Message;
}
