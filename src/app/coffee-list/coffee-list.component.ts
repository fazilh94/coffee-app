import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GridApi } from 'ag-grid-community';
import { BtnCellRenderer } from './button-cell-renderer.component';
import { Coffee } from './coffee.model';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CoffeeListComponent implements OnInit {
  @Input() coffees: Coffee[] = [];
  private gridApi!: GridApi;
  paginationPageSize;
  rowData: Coffee | any=[];
  public domLayout: 'normal' | 'autoHeight' | 'print' = 'autoHeight';
  defaultColDef = {
    sortable: true,
    filter:true
  };
  constructor() {
    this.paginationPageSize=10;
   }

  ngOnInit(): void {
  }

  onGridReady(params:any) {
    params.api.sizeColumnsToFit();
    this.gridApi = params.api ;
    this.gridApi.setDomLayout('autoHeight');
  }
  columnDefs = [
    {headerName: 'ID', field: 'id'},
    {headerName: 'Blend Name', field: 'blend_name'},
    {
      field: 'Details',
      cellRenderer: BtnCellRenderer,
      valueGetter:(props:any)=>props.data,
      cellRendererParams: {
        clicked: function (propsData: Coffee) {
          //console.log(propsData);
          
        },
      },
      minWidth: 150,
    }

];

}
