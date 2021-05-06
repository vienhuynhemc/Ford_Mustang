import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';

const routes: Routes = [{ path: '', component: TrangChuComponent },
{ path: 'chi-tiet/:id', component: ChiTietComponent },
{ path: 'dang-nhap', component: DangNhapComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
