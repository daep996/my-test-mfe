import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { BasicTabsComponent } from './basic-tabs/basic-tabs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTableComponent, BasicTabsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-remote';
}
