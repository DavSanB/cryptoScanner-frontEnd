import { Component, Input, OnInit } from '@angular/core';
import { Toast } from './toast';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent implements OnInit {

  @Input() toast!:Toast

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }
  
  cerrar(){
    this.toastService.close(this.toast.id)
  }

}
