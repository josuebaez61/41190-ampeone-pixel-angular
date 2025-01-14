import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AlumnosTablesComponent } from './alumnos-tables.components';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';

import { AlumnosRoutingModule } from './alumnos-routing.module';

@NgModule({
  declarations: [
    AlumnosTablesComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    DetalleAlumnoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    PipesModule,
    AlumnosRoutingModule,
  ],
  exports: [AlumnosTablesComponent],
  providers: [SidenavTogglerService, AuthService, NotificationsService],
})
export class AlumnosTablesModule {}
