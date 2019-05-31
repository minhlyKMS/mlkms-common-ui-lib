import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'mlkms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() toggleBtnPosition: string = 'left';
  @Input() toggleButtonTemplate: TemplateRef<any>;
  @Input() logoTemplate: TemplateRef<any>;
  @Input() headerMenuTemplate: TemplateRef<any>;
  @Input() userProfileTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

}
