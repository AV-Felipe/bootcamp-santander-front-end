import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
 // quando colocamos no app-routing.module.ts e invocamos pelo <router-outlet> não precisamos exportar aqui
 // exports:[
 //   DashboardPageComponent,
 // ],
})
export class DashboardModule { }
