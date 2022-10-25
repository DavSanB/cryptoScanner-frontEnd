import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SymbolsComponent } from './symbols/symbols.component';
import { SymbolsService } from './symbols/symbols.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [SymbolsService]
})
export class DashboardComponent implements OnInit {

  @ViewChild('symbols') symbols!: SymbolsComponent

  constructor(private symbolService:SymbolsService) { 
    this.symbolService.closedServer$.subscribe(
      estado => {
        this.symbols.close()
      }
    )

    this.symbolService.openedServer$.subscribe(
      estado => {
        this.symbols.open()
      }
    )
  }

  ngOnInit(): void {
  }

}
