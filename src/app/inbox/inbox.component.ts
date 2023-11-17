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
    // const responses: { [key: string]: string }  = {
    //   'hi':'Hello, how are you?',
    //   'how to create task here':'Thanks for asking, you can just click on the "create task" button and start creating the your tasks. ',
    //   'hello': 'Hello! How can I assist you?',
    //   'how are you': 'I am doing good , how are you?',
    //   'default': 'I am sorry, I do not understand. Please ask another question.',
    // };
    const responses: { [key: string]: string }  = {
      'hi': 'Hello, how are you?',
      'how to create task here': 'Thanks for asking! To create a task, simply click on the "create task" button and follow the prompts.',
      'hello': 'Hello! How can I assist you?',
      'how are you': 'I am doing well, thank you. How about yourself?',
      'what is your name': 'I am a virtual assistant and don’t have a personal name. You can call me ChatGPT.',
      'tell me a joke': 'Sure, here\'s a joke for you: Why don\'t scientists trust atoms? Because they make up everything!',
      'goodbye': 'Goodbye! If you have any more questions, feel free to ask.',
      'where are you from': 'I exist in the digital realm and don\'t have a physical origin. Ask me anything!',
      'help': 'Certainly! How can I assist you today?',
      'favorite color': 'I don\'t have a favorite color, but I can help you with any color-related questions.',
      'who created you': 'I was created by OpenAI, a team of researchers and engineers working on artificial intelligence.',
      'what is the meaning of life': 'The meaning of life is a philosophical question. Some say it\'s 42, others believe it varies for each individual.',
      'do you like music': 'I don\'t have personal preferences, but I can help you find information about music or recommend some tunes!',
      'tell me about yourself': 'I am a virtual assistant designed to assist and provide information. Feel free to ask me anything!',
      'favorite book': 'I don\'t have personal preferences, but I can recommend popular books across genres if you\'re interested.',
      'weather today': 'I don\'t have real-time capabilities, but you can check the weather by using a weather website or app.',
      'how to learn programming': 'To learn programming, start with a beginner-friendly language like Python and practice regularly by working on projects.',
      'movie recommendations': 'I can recommend movies based on your preferences! What genre are you in the mood for?',
      'are you a robot': 'Yes, I am a virtual assistant powered by artificial intelligence, but not a physical robot.',
      'coding tips': 'For coding, focus on understanding the fundamentals, practice regularly, and don\'t be afraid to tackle challenging problems.',
      'default': 'I am sorry, I do not understand. Please ask another question.',
    };
    

    return responses[userMessage.toLowerCase()] || responses['default'];
  }
}