import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { catchError } from 'rxjs';
import { OpenaiService } from '../openai.service';

export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatConversation: string[] = [];
  promptText = '';

  constructor(private chatService: OpenaiService) { }

  ngOnInit(): void {
    // Initialization logic
  }

  checkResponse() {
    this.pushChatContent(this.promptText, 'You');

    // Call the service to send the message to the OpenAI API
    this.chatService.sendMessage(this.promptText).subscribe(
      (response: any) => {
        const botResponse = response.choices[0]?.text.trim() || 'Failed to generate response';
        this.pushChatContent(botResponse, 'Mr Bot');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  pushChatContent(content: string, person: string) {
    const chatToPush = `${person}: ${content}`;
    this.chatConversation.push(chatToPush);
  }
}

