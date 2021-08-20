import { Component, OnInit } from '@angular/core';
import { Launch } from '../models/launch';
import { LaunchService } from '../services/launch.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css'],
})
export class LaunchesComponent implements OnInit {
  launches: Launch[] = [];
  load: boolean;

  constructor(private _launchService: LaunchService) {
    this.load = false;
  }

  ngOnInit(): void {
    this._launchService.getLaunches().subscribe((res) => {
      this.launches = res;
      this.load = true;
    });
  }
}
