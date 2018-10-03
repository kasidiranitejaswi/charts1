import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { PiechartComponent } from './piechart/piechart.component';

const appRoutes: Routes = [
  {path : '',
  redirectTo:'line-chart',
  pathMatch:'full',
  // component:'LinechartComponent'
  },
  // {
  //   path : '',
  //   redirectTo:'bar-chart',
  //   pathMatch:'full',
  // },
  {
    path: 'line-chart',
    component: LinechartComponent
},
{
  path:'bar-chart',
  component: BarchartComponent
},
{
  path:'doughnut-chart',
  component: DoughnutchartComponent
},
{
  path:'pie-chart',
  component: PiechartComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarchartComponent,
    DoughnutchartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
