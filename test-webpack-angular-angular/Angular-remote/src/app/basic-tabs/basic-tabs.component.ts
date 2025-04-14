import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-basic-tabs',
  imports: [MatTabsModule],
  templateUrl: './basic-tabs.component.html',
  standalone: true,
})
export class BasicTabsComponent {}
