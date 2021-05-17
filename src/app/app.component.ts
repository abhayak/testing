import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
declare var $: any;

@Component({
  selector: 'app-root',
  // template: '<router-outlet></router-outlet>'
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(protected router: Router, private userIdle: UserIdleService){}
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    console.log('test');


    // //Start watching for user inactivity.
    // this.userIdle.startWatching();

    //     // Start watching wheny user idle is starting.
    // this.userIdle.onTimerStart().subscribe(count =>
    //    console.log(count)
    // );

    // // Start watch when time is up.
    // this.userIdle.onTimeout().subscribe(() =>
    // console.log('Time is up!') , $("#delatetRecentranaction").modal('show')
    // );

  }
  // ngAfterViewInit() {
  //   // $("#delatetRecentranaction").modal('show')
  //   console.log('df');

  // }
}
