import { Component, OnInit } from '@angular/core';
import { SymbolsService } from './symbols.service';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.sass']
})

export class SymbolsComponent implements OnInit {

  monedas = []

  constructor(
    private symbolService:SymbolsService,
  ) { }

  ngOnInit(): void {
    this.symbolService.getSymbols().onmessage = (data =>{
      this.monedas = JSON.parse(data.data)['data']
    })
  }

}
