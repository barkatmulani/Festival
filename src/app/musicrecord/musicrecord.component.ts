import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-musicrecord',
  templateUrl: './musicrecord.component.html',
  styleUrls: ['./musicrecord.component.css']
})
export class AppMusicRecordComponent {
  @Input() musicRecord: MusicRecord;
}
