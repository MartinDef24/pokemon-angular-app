import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";

@Component({
    selector: 'title-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [RouterOutlet, FooterComponent, HeaderComponent],
})

export class AppComponent {}
