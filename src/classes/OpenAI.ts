import axios, { AxiosInstance, AxiosResponse } from 'axios';

class OpenAI {
  private apiKey: string;
  private axiosInstance: AxiosInstance;

  constructor() {
    this.apiKey = "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";
    this.axiosInstance = axios.create({
      baseURL: 'https://api.openai.com/v1/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
    });
  }

  async complete(prompt: string, maxTokens: number = 100): Promise<string> {
    try {
      const response: AxiosResponse<any> = await this.axiosInstance.post('chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      });

      // Extract and return the completion text from the response
      return response.data.choices[0].message.content.trim();
    } catch (error:any) {
      throw new Error(`Error completing text: ${error.message}`);
    }
  }
}

export default OpenAI;