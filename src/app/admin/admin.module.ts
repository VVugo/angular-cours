import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdministrationComponent } from './components/administration/administration.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';


@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserPartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
