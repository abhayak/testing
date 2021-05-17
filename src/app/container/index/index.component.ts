import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationnService } from 'src/app/_service/authenticationn.service';
import { User } from 'src/app/_service/user.service';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentUser: User;
  sessiontimMg = 'Expired';
  timeLeft = 30;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationnService,
    private userIdle: UserIdleService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    public getCount(){
      console.log('dfdf');
    }
    ngOnInit() {
      console.log('test');
      $('#gd').text(' Session Expired !');
      interval(1000).pipe(
        map((x) => { console.log(x);
         })
      );

      // $("#gd").text(" Session Expired ! "+ this.count--)
      // $("#delatetRecentranaction").modal('show')
      // Start watching for user inactivity.
      this.userIdle.startWatching();
      this.userIdle.onTimerStart().subscribe(count =>
        console.log(count),
        );

      // Start watch when time is up.
      this.userIdle.onTimeout().subscribe(() =>  console.log('Time is up!'), $('#delatetRecentranaction').modal('show')  );
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }


}
