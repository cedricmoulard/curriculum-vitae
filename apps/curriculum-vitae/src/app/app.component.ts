import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Router, NavigationEnd, ActivatedRoute, RouterOutlet } from '@angular/router'
import { slideInAnimation } from './animations'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cv-root',
  template: `
      <div [@routeAnimations]="prepareRoute(outlet)">
          <router-outlet #outlet="outlet"></router-outlet>
      </div>
  `,
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {

  constructor(private readonly titleService: Title, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    )
  }

  ngOnInit() {
    const appTitle = this.titleService.getTitle()
    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title']
        }
        return appTitle
      }),
    ).subscribe((title: string) => {
      this.titleService.setTitle(title)
    })
  }
}
