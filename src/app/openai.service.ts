import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // Update with the OpenAI API endpoint

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const prompt = `You: ${message}`;
    const requestData = {
      model: 'text-davinci-003',
      prompt,
      temperature: 0.95,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    return this.http.post<any>(this.apiUrl, requestData);
  }
}

