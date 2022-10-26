import { Component,OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  ConfigNew } from 'src/app/auth/config';
import { SymbolsService } from '../symbols/symbols.service';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass']
})
export class ConfigComponent implements OnInit {

  configForm = this.fb.group({
    monedas: [10],
    orden: ['Cambio']
  })

  colSymbolos: string[] = ["Precio", "Cambio", "Volumen", "#Trades"]

  constructor(
    private fb: FormBuilder,
    private symbolService:SymbolsService,
    private configService:ConfigService
  ) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe (data => {
      this.configForm.controls.monedas.setValue(data.monedas)
      this.configForm.controls.orden.setValue(data.orden)
    })
  }

  actualizar():void{
    this.symbolService.closeServer(false)
    this.configService.updateConfig(new ConfigNew(this.configForm.value)).subscribe (data => {
      this.symbolService.openServer(true)
    })
    
    
  }

}
