import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  constructor(){}
  conversation=new Subject<any[]>();

  getBotAnswer(msg: any) {
    const userMessage = { sender: 'user', text: msg };
    this.conversation.next([userMessage]);
    const botMessage = { sender: 'bot', text: this.getBotMessage(msg) };
    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) {
    const messageMap: any = {
      "hi": "hello",
      "Hi": "Hello",
      "Who are you?": "I am this application's Chatbot, Shrishti designed me",
      "What can you do for me": "I can answer the questions related to this application",
      default: "Sorry! I couldn't understand"
    };
    let answer = messageMap[question];
    return answer || messageMap.default;
  }

}
