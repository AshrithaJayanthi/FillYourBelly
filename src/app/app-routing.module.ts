import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericanComponent } from './american/american.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { DinnerComponent } from './dinner/dinner.component';
import { HomeComponent } from './home/home.component';
import { IndianComponent } from './indian/indian.component';
import { ItalianComponent } from './italian/italian.component';
import { LunchComponent } from './lunch/lunch.component';
import { MealsComponent } from './meals/meals.component';
import { RecipesComponent } from './recipes/recipes.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'cuisine',component:CuisineComponent,children:[
      {path:'indian',component:IndianComponent},
      {path:'american',component:AmericanComponent},
      {path:'italian',component:ItalianComponent}
    ]},
    {path:'meals',component:MealsComponent,children:[
      {path:'breakfast',component:BreakfastComponent},
      {path:'lunch',component:LunchComponent},
      {path:'dinner',component:DinnerComponent}
    ]}
  ]},
  {path:'contactus',component:ContactusComponent},
  { path:'', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
