import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Breadcrumb } from 'src/app/booking/bread-crumb-model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbValues: Breadcrumb[] =[];


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let breadcrumb: Breadcrumb = {
      label: 'Home',
      path: 'home'
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbValues = this.getBreadcrumbValues(root);
      this.breadcrumbValues = [breadcrumb, ...this.breadcrumbValues];
    });
  }


  private getBreadcrumbValues(route: ActivatedRoute, url: string = "", breadcrumbValues :Breadcrumb[]=[] ): Breadcrumb[] {
    
    const ROUTE_DATA = 'title';

    // get the child route 
    let children: ActivatedRoute[] = route.children;
    
    // return; if there are no more children 
    if(children.length === 0){
      return breadcrumbValues;
    }

    // iterate over each children
    for(let child of children){
      // TODO :replace snapshat
      if(child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length ==0){
        continue;
      }

      // verify the custom data properties
      if(!child.snapshot.data.hasOwnProperty(ROUTE_DATA)){
        return this.getBreadcrumbValues(child, url, breadcrumbValues);
      }

      // get the routes url segment
      let routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');

      // append route URL to the URL
      url += `/${routeUrl}`;

      // add breadcrumb
      let breadcumb: Breadcrumb = {
        label: child.snapshot.data[ROUTE_DATA],
        path: url
      }

      breadcrumbValues.push(breadcumb);

      // recursive 
      return this.getBreadcrumbValues(child, url, breadcrumbValues);
    }

    return breadcrumbValues; 
  }
}
