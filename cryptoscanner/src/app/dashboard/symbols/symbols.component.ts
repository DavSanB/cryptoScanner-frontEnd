import { Component, Input, OnInit } from '@angular/core';
import { EventSourcePolyfill } from 'ng-event-source';
import { SymbolsService } from './symbols.service';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.sass']
})

export class SymbolsComponent implements OnInit {

  @Input() end:boolean = false
  
  server!: EventSourcePolyfill
  monedas = []

  constructor(
    private symbolService:SymbolsService,
  ) { }

  ngOnInit(): void {
    this.open()
  }

  open(){
    this.server = this.symbolService.getSymbols()
    this.server.onmessage = (data =>{
      this.monedas = JSON.parse(data.data)['data']
    })
  }

  close(){
    this.server.close()
  }

  ngOnDestroy(): void {
    this.close()
  }

}
