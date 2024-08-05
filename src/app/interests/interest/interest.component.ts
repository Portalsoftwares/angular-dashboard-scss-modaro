import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Imovs } from 'src/app/model/imovs';
import * as tiposData from 'src/assets/imovs.json';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent {

  tipos: Imovs[] = [];
  data!: any[];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl('')
  });
  filtrados: any[] = [];

  constructor(private http: HttpClient) {
    this.data = tiposData as Imovs[];
    console.log('data ', this.data);

    this.tipos = Object.values(this.data) as Imovs[];
    console.log('tipos0', this.tipos);

    this.http.get<any[]>('assets/imovs.json').subscribe(
      (data: any[]) => {
        console.log('tipos', data);
        this.tipos = data;
      },
      (error) => {
        console.error('Erro ao carregar o arquivo data.json:', error);
      }
    );

  }

  search() {
    // Access form values
    debugger;
    const nome = this.searchForm.get('name')?.value;
    const type = this.searchForm.get('type')?.value;
    const preco = this.searchForm.get('price')?.value;

    // Perform search using the form values
    const filteredTipos = this.tipos.filter(tipo => {
      if (nome && tipo.name !== nome) {
        return false;
      }
      if (type && tipo.type !== type) {
        return false;
      }
      if (preco && tipo.price !== preco) {
        return false;
      }
      return true;
    });
    this.filtrados = filteredTipos;
    console.log('Filtered tipos:', filteredTipos);
  }

  // constructor(private http: HttpClient) {
  //   this.data = tiposData as Imovs[];
  //   console.log('data ', this.data);

  //   this.tipos = Object.values(this.data) as Imovs[];
  //   console.log('tipos0', this.tipos);

  //   this.http.get<any[]>('assets/imovs.json').subscribe(
  //     (data: any[]) => {
  //       console.log('tipos', data);
  //       this.tipos = data;
  //     },
  //     (error) => {
  //       console.error('Erro ao carregar o arquivo data.json:', error);
  //     }
  //   );
  // }



}
