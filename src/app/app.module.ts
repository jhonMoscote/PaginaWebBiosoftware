import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { InspecionComponent } from './components/inspecion/inspecion.component';
import { InformacionEquipoComponent } from './components/informacion-equipo/informacion-equipo.component';
import { RiesgoaltoComponent } from './components/almacen_Equipos/riesgoalto/riesgoalto.component';
import { RiesgomedioComponent } from './components/almacen_Equipos/riesgomedio/riesgomedio.component';
import { RiesgobajoComponent } from './components/almacen_Equipos/riesgobajo/riesgobajo.component';
import { DadosbajaComponent } from './components/almacen_Equipos/dadosbaja/dadosbaja.component';
import { UcineonatalComponent } from './components/servicios_Hospital/ucineonatal/ucineonatal.component';
import { UciadultosComponent } from './components/servicios_Hospital/uciadultos/uciadultos.component';
import { UcininosComponent } from './components/servicios_Hospital/ucininos/ucininos.component';
import { UrgenciasComponent } from './components/servicios_Hospital/urgencias/urgencias.component';
import { CreateAlmacenComponent } from './components/create-almacen/create-almacen.component';

import { MenuequipoComponent } from './components/menuequipo/menuequipo.component';
import { MenuhojavidaComponent } from './components/menuhojavida/menuhojavida.component';
import { HojadevidaComponent } from './components/hojadevida/hojadevida/hojadevida.component';
import { MantenimientopreventivoComponent } from './components/hojadevida/mantenimientopreventivo/mantenimientopreventivo.component';
import { MantenimientocorrectivoComponent } from './components/hojadevida/mantenimientocorrectivo/mantenimientocorrectivo.component';
import { CertificacionmetrologicaComponent } from './components/hojadevida/certificacionmetrologica/certificacionmetrologica.component';
import { ProtocololimpiezaComponent } from './components/hojadevida/protocololimpieza/protocololimpieza.component';
import { InspeccionseguridadComponent } from './components/hojadevida/inspeccionseguridad/inspeccionseguridad.component';
import { InspeccionfuncionamientoComponent } from './components/hojadevida/inspeccionfuncionamiento/inspeccionfuncionamiento.component';
import { ActualizarequipoComponent } from './components/hojadevida/actualizarequipo/actualizarequipo.component';
import { EquipomantenimientoComponent } from './components/equipomantenimiento/equipomantenimiento.component';
import { HistorialmantenimientoComponent } from './components/historialmantenimiento/historialmantenimiento.component';
import { ConsultaprioritariaComponent } from './components/servicios_Hospital/consultaprioritaria/consultaprioritaria.component';
import { LaboratorioclinicoComponent } from './components/servicios_Hospital/laboratorioclinico/laboratorioclinico.component';
import { ServiciofarmaceuticoComponent } from './components/servicios_Hospital/serviciofarmaceutico/serviciofarmaceutico.component';
import { InterpretacionComponent } from './components/servicios_Hospital/interpretacion/interpretacion.component';
import { TempranaComponent } from './components/servicios_Hospital/temprana/temprana.component';
import { EnfermeriaComponent } from './components/servicios_Hospital/enfermeria/enfermeria.component';
import { HistorialmantenimientopreventivoComponent } from './components/historialmantenimientopreventivo/historialmantenimientopreventivo.component';
import { PorcentajeCorrectivoComponent } from './components/porcentaje-correctivo/porcentaje-correctivo.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PorcentajePresupuestoComponent } from './components/porcentaje-presupuesto/porcentaje-presupuesto.component';
import { FallasEquipoComponent } from './components/fallas-equipo/fallas-equipo.component';
import { FallasPersonalComponent } from './components/fallas-personal/fallas-personal.component';
import { PorcentajepreventivosComponent } from './components/porcentajepreventivos/porcentajepreventivos.component';
import { ConsultoriosmedicinaComponent } from './components/consultoriosmedicina/consultoriosmedicina.component';
import { ConsultoriosenfermeriaComponent } from './components/consultoriosenfermeria/consultoriosenfermeria.component';
import { ConsultoriosodontologiaComponent } from './components/consultoriosodontologia/consultoriosodontologia.component';
import { Consultoriomedicina1Component } from './components/consultorios/consultoriomedicina1/consultoriomedicina1.component';
import { Consultoriomedicina2Component } from './components/consultorios/consultoriomedicina2/consultoriomedicina2.component';
import { Consultoriomedicina3Component } from './components/consultorios/consultoriomedicina3/consultoriomedicina3.component';
import { Consultoriomedicina4Component } from './components/consultorios/consultoriomedicina4/consultoriomedicina4.component';
import { Consultoriomedicina5Component } from './components/consultorios/consultoriomedicina5/consultoriomedicina5.component';
import { Consultoriomedicina6Component } from './components/consultorios/consultoriomedicina6/consultoriomedicina6.component';
import { Consultorioenfermeria1Component } from './components/consultorios/consultorioenfermeria1/consultorioenfermeria1.component';
import { Consultorioenfermeria2Component } from './components/consultorios/consultorioenfermeria2/consultorioenfermeria2.component';
import { Consultorioodontologia1Component } from './components/consultorios/consultorioodontologia1/consultorioodontologia1.component';
import { Consultorioodontologia2Component } from './components/consultorios/consultorioodontologia2/consultorioodontologia2.component';
import { Consultorioodontologia3Component } from './components/consultorios/consultorioodontologia3/consultorioodontologia3.component';
import { MenuhojadevidaComponent } from './components/hojadevida/menuhojadevida/menuhojadevida.component';
import { DocumentosequiposComponent } from './components/hojadevida/documentosequipos/documentosequipos.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EquiposComponent,
    NavbarComponent,
    ServiciosComponent,
    AlmacenComponent,
    PlanificacionComponent,
    GestionComponent,
    EjecucionComponent,
    InspecionComponent,
    InformacionEquipoComponent,
    RiesgoaltoComponent,
    RiesgomedioComponent,
    RiesgobajoComponent,
    DadosbajaComponent,
    UcineonatalComponent,
    UciadultosComponent,
    UcininosComponent,
    UrgenciasComponent,
    CreateAlmacenComponent,
 
    MenuequipoComponent,
    MenuhojavidaComponent,
    HojadevidaComponent,
    MantenimientopreventivoComponent,
    MantenimientocorrectivoComponent,
    CertificacionmetrologicaComponent,
    ProtocololimpiezaComponent,
    InspeccionseguridadComponent,
    InspeccionfuncionamientoComponent,
    ActualizarequipoComponent,
    EquipomantenimientoComponent,
    HistorialmantenimientoComponent,
    ConsultaprioritariaComponent,
    LaboratorioclinicoComponent,
    ServiciofarmaceuticoComponent,
    InterpretacionComponent,
    TempranaComponent,
    EnfermeriaComponent,
    HistorialmantenimientopreventivoComponent,
    PorcentajeCorrectivoComponent,
 
    PorcentajePresupuestoComponent,
    FallasEquipoComponent,
    FallasPersonalComponent,
    PorcentajepreventivosComponent,
    ConsultoriosmedicinaComponent,
    ConsultoriosenfermeriaComponent,
    ConsultoriosodontologiaComponent,
    Consultoriomedicina1Component,
    Consultoriomedicina2Component,
    Consultoriomedicina3Component,
    Consultoriomedicina4Component,
    Consultoriomedicina5Component,
    Consultoriomedicina6Component,
    Consultorioenfermeria1Component,
    Consultorioenfermeria2Component,
    Consultorioodontologia1Component,
    Consultorioodontologia2Component,
    Consultorioodontologia3Component,
    MenuhojadevidaComponent,
    DocumentosequiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireStorageModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
