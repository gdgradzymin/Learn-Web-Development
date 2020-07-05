import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'myg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-growth';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('pl');
  }
}
