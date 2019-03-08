import { Component, OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import Tabulator from 'tabulator-tables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tabulator-table';
  people: IPerson[] = [];
  columnNames: any[] = [];
  myTable: Tabulator;
  height:string ='311px';
  ngOnInit() {
    this.people = [
      { id: 1, firstName: "John", lastName: "Smith", state: "Ohio" },
      { id: 2, firstName: "Jane", lastName: "Doe", state: "Iowa" },
      { id: 3, firstName: "Bill", lastName: "Great", state: "Hawaii" },
      { id: 4, firstName: "Ted", lastName: "Adventure", state: "Arizona" }
    ];

    this.columnNames = [
      { title: "Id", field: "id" },
      { title: "First Name", field: "firstName" },
      { title: "Last Name", field: "lastName" },
      { title: "Location", field: "state" }
    ];

    // reference id of div where table is to be displayed (prepend #)
    this.myTable = new Tabulator("#tabulator-div"); 
    this.myTable.setColumns(this.columnNames);
    this.myTable.setData(this.people);
  }
  tab = document.createElement('div');
  constructor() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }
  
  private drawTable(): void {
    new Tabulator(this.tab, {
      data: this.people,
      columns: this.columnNames,
      layout: 'fitData',
      height: this.height
    });
    document.getElementById('my-tabular-table').appendChild(this.tab);
  }
}


interface IPerson {
  id: number,
  firstName: string,
  lastName: string,
  state: string
}

