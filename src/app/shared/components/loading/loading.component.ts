import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(public ss: SharedService) { }

  ngOnInit() {}


}
