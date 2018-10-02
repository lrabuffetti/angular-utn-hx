import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'app';
  public informationFromService = [];
  public infoFromServiceMock = [];

  public constructor(private testService: TestService) {
    console.log(this.testService.getDataFromService());
  }

  public ngOnInit() {
    this.informationFromService = this.testService.getInformation();

    this.testService.getDataFromService()
    .subscribe(heroes => this.infoFromServiceMock = heroes);
  }
}
