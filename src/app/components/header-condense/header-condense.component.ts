import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-condense',
  templateUrl: './header-condense.component.html',
  styleUrls: ['./header-condense.component.scss'],
})
export class HeaderCondenseComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
