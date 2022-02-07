import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Components
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import { SpeechSynthesisModule } from '@kamiazya/ngx-speech-synthesis';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RestaurantinfoComponent } from './components/restaurantinfo/restaurantinfo.component';
import { RestaurantmenuComponent } from './components/restaurantmenu/restaurantmenu.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ModalComponent,
    WeatherComponent,
    AboutComponent,
    ContactComponent,
    RestaurantinfoComponent,
    RestaurantmenuComponent,
    ReservationComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatBadgeModule,
    SlickCarouselModule,
    MatDialogModule,
    SpeechSynthesisModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    SpeechSynthesisModule.forRoot({
      lang: 'en',
      volume: 1.0,
      pitch: 1.1,
      rate: 1.1,
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },

        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: 'contact',
          component: ContactComponent,
        },
        {
          path: 'login',
          component: LoginComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
