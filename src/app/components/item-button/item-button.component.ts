import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-button',
  templateUrl: './item-button.component.html',
  styleUrls: ['./item-button.component.scss'],
})
export class ItemButtonComponent implements OnInit {

  @Input() routeLink;
  @Input() param;
  @Input() buttonTitle;

  constructor() { }

  ngOnInit() {}

}
