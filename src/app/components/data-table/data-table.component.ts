import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTableState, HeaderRowItem } from 'src/app/models/data-table';


// NgRx
import { Store } from '@ngrx/store';
import * as dataTableActions from '../../@ngrx/data-table';
import * as dataTableSelectors from 'src/app/@ngrx/data-table/data-table.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() data!: any[];
  @Input() headerRow!: HeaderRowItem[];

  public sortDirection$!: Observable<string>;
  public sortKey$!: Observable<string>;
  public tableData$!: Observable<any>;

  constructor(private store: Store<DataTableState>, private service:DataService, private router:Router) {}

  ngOnInit(): void {
    // DISPATCH
    this.store.dispatch(dataTableActions.setData({ data: this.data }));

    // SELECTORS
    this.tableData$ = this.store.select(dataTableSelectors.selectData);
    // this.sortKey$ = this.store.select(dataTableSelectors.selectSortKey);
    // this.sortDirection$ = this.store.select(dataTableSelectors.selectSortDirection);
  }

  ngOnDestroy(): void {
    this.store.dispatch(dataTableActions.resetDataTableStore());
  }

  public onSort(headerItem: HeaderRowItem): void {
    if (!headerItem.hasSort) {
      return;
    }
    const sortKey = headerItem.key;
    this.store.dispatch(dataTableActions.setSortKey({ sortKey: sortKey }));
  }

  radioSelected(id:number){
    this.service.selectRadio = id;
    console.log("You have selected:",this.service.selectRadio)
  }

  UserDetails(id:number){
    // console.log("PPPPPPPPPPPPPPPPPPPPP", id)
    this.router.navigate([`/userinfo/${id}`])
  }






}
