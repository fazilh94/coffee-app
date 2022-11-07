import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'btn-cell-renderer',
  standalone:true,
  imports:[CommonModule],
  template: `
    <button type="button" class="btn btn-primary btn-xs" (click)="btnClickedHandler($event)"> View Details</button>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  constructor(private route:Router){

  }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    console.log(this.params.value);
    this.params.clicked(this.params.value);
    const id = this.params.value.id;
    this.route.navigate(['coffee', id]);

  }

  refresh() {
    return false;
  }
}
