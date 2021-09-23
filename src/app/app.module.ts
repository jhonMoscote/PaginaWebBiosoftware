import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { InspecionComponent } from './components/inspecion/inspecion.component';
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
import { HojadevidaComponent } from './components/hojadevida/hojadevida/hojadevida.component';
import { MantenimientopreventivoComponent } from './components/hojadevida/mantenimientopreventivo/mantenimientopreventivo.component';
import { MantenimientocorrectivoComponent } from './components/hojadevida/mantenimientocorrectivo/mantenimientocorrectivo.component';
import { CertificacionmetrologicaComponent } from './components/hojadevida/certificacionmetrologica/certificacionmetrologica.component';

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
import { RepuestosComponent } from './ui/repuestos/repuestos.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
 import { AuthService } from "./services/auth.service";
import { RegistrarequipoComponent } from './components/hojadevida/registrarequipo/registrarequipo.component';
import { RutinaComponent } from './ui/rutina/rutina.component';
import { RutinapreventivaComponent } from './components/hojadevida/rutinapreventiva/rutinapreventiva.component';
import { MostrarutinaComponent } from './components/hojadevida/mostrarutina/mostrarutina.component';
import { FallaElectricaComponent } from './components/falla-electrica/falla-electrica.component';
import { Clase2aComponent } from './components/almacen_Equipos/clase2a/clase2a.component';
import { FormatoDarBajaComponent } from './components/formato-dar-baja/formato-dar-baja.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { RegistrarusuarioComponent } from './components/registrarusuario/registrarusuario.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { EquiposdadosbajaComponent } from './components/equiposdadosbaja/equiposdadosbaja.component';
import { ReportebajaComponent } from './components/reportebaja/reportebaja.component';
import { ReporteCorrectivoComponent } from './components/reporte-correctivo/reporte-correctivo.component';
import { ReportePreventivoComponent } from './components/reporte-preventivo/reporte-preventivo.component';
import { ProtocololimpiezaComponent } from './components/protocololimpieza/protocololimpieza.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HistorialSolicitudesComponent } from './components/historial-solicitudes/historial-solicitudes.component';
import { HistorialSolicitudesNoRealizadasComponent } from './components/historial-solicitudes-no-realizadas/historial-solicitudes-no-realizadas.component';
import { FormatoSolicitudCorrectivoComponent } from './components/formato-solicitud-correctivo/formato-solicitud-correctivo.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EquiposComponent,
    NavbarComponent,
    ServiciosComponent,
    AlmacenComponent,
    PlanificacionComponent,
    InspecionComponent,
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
    HojadevidaComponent,
    MantenimientopreventivoComponent,
    MantenimientocorrectivoComponent,
    CertificacionmetrologicaComponent,
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
    DocumentosequiposComponent,
    RepuestosComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    IniciosesionComponent,
    RegistrarequipoComponent,
    RutinaComponent,
    RutinapreventivaComponent,
    MostrarutinaComponent,
    FallaElectricaComponent,
    Clase2aComponent,
    FormatoDarBajaComponent,
    EditarusuarioComponent,
    ListausuariosComponent,
    RegistrarusuarioComponent,
    CronogramaComponent,
    EquiposdadosbajaComponent,
    ReportebajaComponent,
    ReporteCorrectivoComponent,
    ReportePreventivoComponent,
    ProtocololimpiezaComponent,
    CodigoqrComponent,
    HistorialSolicitudesComponent,
    HistorialSolicitudesNoRealizadasComponent,
    FormatoSolicitudCorrectivoComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireStorageModule,
    MatProgressBarModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatAutocompleteModule,
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
