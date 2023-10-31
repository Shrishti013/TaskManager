import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent{
  messages: { text: string; isUser: boolean }[] = [];
  userMessage: string = '';

  sendMessage() {
    const userMessage = this.userMessage.trim();
    if (userMessage === '') return;

    this.messages.push({ text: userMessage, isUser: true });
    this.userMessage = '';

    const botResponse = this.getBotResponse(userMessage);
    this.messages.push({ text: botResponse, isUser: false });
  }

  getBotResponse(userMessage: string): string {
    // Hardcoded responses
    const responses: { [key: string]: string }  = {
      'hi':'Hello, how are you?',
      'how to create task here':'Thanks for asking, you can just click on the "create task" button and start creating the your tasks. ',
      'hello': 'Hello! How can I assist you?',
      'how are you': 'I am doing good , how are you?',
      'default': 'I am sorry, I do not understand. Please ask another question.',
    };

    return responses[userMessage.toLowerCase()] || responses['default'];
  }
}