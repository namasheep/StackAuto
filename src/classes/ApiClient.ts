import axios from 'axios';

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/${endpoint}`);
      return response.data;
    } catch (error:any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}



export default ApiClient;
