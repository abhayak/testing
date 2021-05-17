import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { AuthenticationnService } from 'src/app/_service/authenticationn.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // pathName
  @Input('pathName') pathName: any = 'Bob';
  @Output() setpathName = new EventEmitter();
  constructor(private activatedRouter: ActivatedRoute,  private router: Router, private auth: AuthenticationnService) {
    this.auth.cheecktimeout();
    // this.activatedRouter.params.subscribe(params =>{
    //   if(params['id']!="onefetch"){
    //     this.auth.cheecktimeout();
    //     this.pathName=params['id'];
    //     console.log(params);
    //   }


    // })

  }

  ngOnInit(): void {
    // this.pathName="Shyam"
    // console.log("g");


  }
  logout() {
    this.auth.logout();
    // this.router.navigate(['/login']);
  }

  // Get NavigationStart events
// thisd.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
//   const navigation = this.router.getCurrentNavigation();
//   tracingService.trace({id: navigation.extras.state.tracingId});
// });

}
