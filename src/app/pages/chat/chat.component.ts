import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSugestionsComponent } from '../../components/chat-sugestions/chat-sugestions.component';
import { Message } from '../../types/message.types';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    ArrowLeftComponent,
    MuseumComponent,
    ChatSugestionsComponent,
    ChatDialogComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  messages: Message[] = []

  sendSuggestedQuestion(question:string){
    this.messages.push({
      type: 'request',
      message: question
    })
  }

}
