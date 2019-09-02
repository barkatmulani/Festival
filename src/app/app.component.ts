import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicFestival';
  records: MusicRecord[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let apiURL = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    let recs: any[], bands: any[];
    let record: any, bnd: any;

    this.http.get(apiURL, httpOptions).subscribe((data: any[]) => {
      console.log(data);
      data.forEach(festival => {
        festival.bands.forEach(band => {
          recs = this.records.filter(r => r.recordLabel === band.recordLabel);
          if(recs.length) {
            record = recs[0];
            bands = record.bands.filter(b => b.name === band.name);
            if(bands.length) {
              bnd = bands[0];
              bnd.festivals.push({ name: festival.name });
            }
            else {
              bnd = { 'name': band.name, festivals: [{ name: festival.name }] };
              record.bands.push(bnd);
            }
          }
          else {
            record = { recordLabel: band.recordLabel, bands: [{ name: band.name, festivals: [{ name: festival.name }] }] };
            this.records.push(record);
          }
        });
      });
      console.log(this.records);
    });
  }
}
