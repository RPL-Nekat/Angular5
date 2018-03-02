import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  public datas = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
      this._dataService.getDatas()
        .subscribe(data => this.datas = data);
  }

}
