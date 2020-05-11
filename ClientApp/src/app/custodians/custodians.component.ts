import { Component, OnInit } from '@angular/core';
import { Custodian } from '../interfaces/custodian';
import { CustodiansService } from '../services/custodians.service';

@Component({
  selector: 'app-custodians',
  templateUrl: './custodians.component.html',
  styleUrls: ['./custodians.component.css']
})
export class CustodiansComponent implements OnInit {

  custodian: Custodian =
    {
      
      firstName: '',
      lastName: '',
      isCurrentEmployee: true,
    }

  custodians: Custodian[] = [];

  constructor(private service: CustodiansService) { }

  async ngOnInit() {
    this.custodians = await this.service.getCustodian();
  }
  async save() {
    const newCustodian = await this.service.addCustodian(this.custodian);
    this.custodians.push(newCustodian);
    console.log(newCustodian);
  }

}
