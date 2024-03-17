import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSugestionsComponent } from '../../components/chat-sugestions/chat-sugestions.component';
import { Message } from '../../types/message.types';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { SendComponent } from "../../icons/send/send.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    imports: [
        ArrowLeftComponent,
        MuseumComponent,
        ChatSugestionsComponent,
        ChatDialogComponent,
        ReactiveFormsModule,
        SendComponent
    ]
})
export class ChatComponent implements AfterViewInit {
  messages: Message[] = []
  chatForm!: FormGroup;

  constructor(private service: MessageService, private location: Location) {
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }

  goBack() {
    this.location.back();
  }

  ngAfterViewInit(): void {
    this.messages = JSON.parse(localStorage.getItem("messages") ?? "[]")
  }

  updateLocalStorage() {
    localStorage.setItem("messages", JSON.stringify(this.messages))
  }

  submit(){
    this.sendNewMessage(this.chatForm.value.message);
    this.chatForm.reset();
  }

  sendNewMessage(question: string){
    this.messages.push({
      type: 'request',
      message: question
    })

    this.updateLocalStorage()
    this.sendMessage(question)
  }


  sendMessage(message: string){
    this.service.send(message).subscribe({
      next: (body) => {
        this.messages.push({
          type: "response",
          message: body.response
        })
        this.updateLocalStorage()
      }
    })
  }

}
