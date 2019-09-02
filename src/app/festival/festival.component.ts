import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.css']
})
export class FestivalComponent {
  @Input() festival: Festival;
}
