import {Component} from '@angular/core'
@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/navbar.component.html',
    styles: [` 
        .nav.navbar-nav{font-size : 15 px;}
        #serachForm{margin-right : 100 px;}
        @media(max-width: 1200px) {#searchForm{display:none}}
    `]
})
export class NavBarComponent {

}