import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Custodian } from '../interfaces/custodian';

@Injectable({
  providedIn: 'root'
})
export class CustodiansService {

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  async getCustodian() {
    return this.httpClient.get<Custodian[]>('${this.baseUrl}custodian').toPromise();
  }
  async addCustodian(custodian: Custodian) {
      return await this.httpClient.post<Custodian>('${this.baseUrl}custodian', custodian).toPromise();
    


  }
}
