import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TypingComponent } from './components/typing/typing.component';
import { HomeComponent } from './components/home/home.component';
import { WpmPipe } from './pipes/wpm/wpm.pipe';
import { TimerPipe } from './pipes/timer/timer.pipe';
import { RightLetterPipe } from './pipes/rightLetter/right-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    HomeComponent,
    WpmPipe,
    TimerPipe,
    RightLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
