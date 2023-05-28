import axios from 'axios';

export class UsersService {
  private apiUrl = '/api/users';

  async login(email: string, password: string): Promise<any> {
    const url = `${this.apiUrl}/login`;
    const body = { user: { email, password } };
    const response = await axios.post(url, body);
    localStorage.setItem('token', response.data.token);
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}