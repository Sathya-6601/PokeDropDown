import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PokeModel, Pokemon } from '../poke';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { DataService } from '../Services/data.service';
import { Dropdata } from '../dropdata';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  dropDownList= [
    {id:1,name: 'sathya'},
    {id:2,name: 'sathya'},
    {id:3,name: 'sathya'},
    {id:4,name: 'sathya'}
  ];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  tmp: any;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.getPokemon();
    this.getData();
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  getPokemon() {
    this.ds.getPokeName().subscribe((response: Pokemon) => {
      console.log(response);
      response.results.forEach((result) => {
        this.ds.getPokeDetails(result.name).subscribe((data: any) => {
          return this.pokemons.push(data);
        });
      });
    });
  }

  getData(): void {
    let tmp: Dropdata[];
    this.ds.getPokeName().subscribe((response: Pokemon) => {
      response.results.forEach((result: any) => {
        this.ds.getPokeDetails(result.name).subscribe((data) => {
          for (let i = 0; i < data.length; i++) {
            this.dropDownList.push({ id: data[i].id, name: data[i].name });
          }
        });
      });
      console.log(this.dropDownList);
    });
  }

  onItemSelect(value: any) {}

  onSelectAll(value: any) {}
}
