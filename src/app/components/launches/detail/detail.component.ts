import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from '../../models/launch';
import { Rocket } from '../../models/rocket';
import { LaunchService } from '../../services/launch.service';
import { RocketService } from '../../services/rocket.service';
import { map } from 'rxjs/operators';
import { Detail } from '../../models/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public rockets: Rocket;

  constructor(
    private _rocketService: RocketService,
    private _launchService: LaunchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let flight_number: any;

    let launchRes: Launch;
    let rocketRes: Rocket;

    let detail: Detail;

    flight_number = this.route.snapshot.paramMap.get('id');

    this._launchService
      .getLaunches()
      .pipe(
        map((data) =>
          data.filter((data) => data.flight_number == flight_number)
        )
      )
      .subscribe((data: Launch[]) => {
        launchRes = data[0];
        this._rocketService
      .getRockets()
      .pipe(
        map((data) =>
          data.filter((data) => data.rocket_id == launchRes.rocket.rocket_id)
        )
      )
      .subscribe((data: Rocket[]) => {
        rocketRes = data[0];
        detail = {
          launch: launchRes,
          rocket: rocketRes,
        };

        console.log(detail);
      });
      });

    
  }
}
