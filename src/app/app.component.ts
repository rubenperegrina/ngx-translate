import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentLang!: string;
  constructor(private translate: TranslateService){
    this.currentLang = translate.currentLang || translate.getDefaultLang();
  }

  changeLang() {
    this.currentLang === 'es' ? this.translate.use('en') : this.translate.use('es');
    this.currentLang = this.translate.currentLang;
  }
}
