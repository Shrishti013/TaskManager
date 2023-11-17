import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Replace with your GPT-3 API endpoint
  // private apiKey = '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'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) { }

  generateText(inputText: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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' // Replace with your OpenAI API key
    });

    const data = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: inputText }
      ],
      max_tokens: 150
    };

    return this.http.post<any>(this.apiUrl, data, { headers });
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('API error:', error);
  //   return Promise.reject(error.message || error);
  // }  
}
