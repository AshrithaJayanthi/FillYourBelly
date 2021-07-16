import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { MealsComponent } from './meals/meals.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { AmericanComponent } from './american/american.component';
import { SearchPipe } from './search.pipe';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RecipesComponent,
    CuisineComponent,
    MealsComponent,
    ContactusComponent,
    IndianComponent,
    ItalianComponent,
    AmericanComponent,
    SearchPipe,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent
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
export class AppModule { }
