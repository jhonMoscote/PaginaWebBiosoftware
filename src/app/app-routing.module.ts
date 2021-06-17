import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { Clase2aComponent } from './components/almacen_Equipos/clase2a/clase2a.component';
import { DadosbajaComponent } from './components/almacen_Equipos/dadosbaja/dadosbaja.component';
import { RiesgoaltoComponent } from './components/almacen_Equipos/riesgoalto/riesgoalto.component';
import { RiesgobajoComponent } from './components/almacen_Equipos/riesgobajo/riesgobajo.component';
import { RiesgomedioComponent } from './components/almacen_Equipos/riesgomedio/riesgomedio.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { Consultorioenfermeria1Component } from './components/consultorios/consultorioenfermeria1/consultorioenfermeria1.component';
import { Consultorioenfermeria2Component } from './components/consultorios/consultorioenfermeria2/consultorioenfermeria2.component';
import { Consultoriomedicina1Component } from './components/consultorios/consultoriomedicina1/consultoriomedicina1.component';
import { Consultoriomedicina2Component } from './components/consultorios/consultoriomedicina2/consultoriomedicina2.component';
import { Consultoriomedicina3Component } from './components/consultorios/consultoriomedicina3/consultoriomedicina3.component';
import { Consultoriomedicina4Component } from './components/consultorios/consultoriomedicina4/consultoriomedicina4.component';
import { Consultoriomedicina5Component } from './components/consultorios/consultoriomedicina5/consultoriomedicina5.component';
import { Consultoriomedicina6Component } from './components/consultorios/consultoriomedicina6/consultoriomedicina6.component';
import { Consultorioodontologia1Component } from './components/consultorios/consultorioodontologia1/consultorioodontologia1.component';
import { Consultorioodontologia2Component } from './components/consultorios/consultorioodontologia2/consultorioodontologia2.component';
import { Consultorioodontologia3Component } from './components/consultorios/consultorioodontologia3/consultorioodontologia3.component';
import { ConsultoriosenfermeriaComponent } from './components/consultoriosenfermeria/consultoriosenfermeria.component';
import { ConsultoriosmedicinaComponent } from './components/consultoriosmedicina/consultoriosmedicina.component';
import { ConsultoriosodontologiaComponent } from './components/consultoriosodontologia/consultoriosodontologia.component';
import { CreateAlmacenComponent } from './components/create-almacen/create-almacen.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { EquipomantenimientoComponent } from './components/equipomantenimiento/equipomantenimiento.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { EquiposdadosbajaComponent } from './components/equiposdadosbaja/equiposdadosbaja.component';
import { FallaElectricaComponent } from './components/falla-electrica/falla-electrica.component';
import { FallasEquipoComponent } from './components/fallas-equipo/fallas-equipo.component';
import { FallasPersonalComponent } from './components/fallas-personal/fallas-personal.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormatoDarBajaComponent } from './components/formato-dar-baja/formato-dar-baja.component';
import { HistorialmantenimientoComponent } from './components/historialmantenimiento/historialmantenimiento.component';
import { HistorialmantenimientopreventivoComponent } from './components/historialmantenimientopreventivo/historialmantenimientopreventivo.component';
import { ActualizarequipoComponent } from './components/hojadevida/actualizarequipo/actualizarequipo.component';
import { CertificacionmetrologicaComponent } from './components/hojadevida/certificacionmetrologica/certificacionmetrologica.component';
import { DocumentosequiposComponent } from './components/hojadevida/documentosequipos/documentosequipos.component';
import { HojadevidaComponent } from './components/hojadevida/hojadevida/hojadevida.component';
import { InspeccionfuncionamientoComponent } from './components/hojadevida/inspeccionfuncionamiento/inspeccionfuncionamiento.component';
import { InspeccionseguridadComponent } from './components/hojadevida/inspeccionseguridad/inspeccionseguridad.component';
import { MantenimientocorrectivoComponent } from './components/hojadevida/mantenimientocorrectivo/mantenimientocorrectivo.component';
import { MantenimientopreventivoComponent } from './components/hojadevida/mantenimientopreventivo/mantenimientopreventivo.component';
import { MenuhojadevidaComponent } from './components/hojadevida/menuhojadevida/menuhojadevida.component';
import { MostrarutinaComponent } from './components/hojadevida/mostrarutina/mostrarutina.component';
import { RegistrarequipoComponent } from './components/hojadevida/registrarequipo/registrarequipo.component';
import { RutinapreventivaComponent } from './components/hojadevida/rutinapreventiva/rutinapreventiva.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { InspecionComponent } from './components/inspecion/inspecion.component';
import { ListausuariosComponent } from './components/listausuarios/listausuarios.component';
import { MenuequipoComponent } from './components/menuequipo/menuequipo.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { PorcentajeCorrectivoComponent } from './components/porcentaje-correctivo/porcentaje-correctivo.component';
import { PorcentajePresupuestoComponent } from './components/porcentaje-presupuesto/porcentaje-presupuesto.component';
import { PorcentajepreventivosComponent } from './components/porcentajepreventivos/porcentajepreventivos.component';
import { ProtocololimpiezaComponent } from './components/protocololimpieza/protocololimpieza.component';
import { RegistrarusuarioComponent } from './components/registrarusuario/registrarusuario.component';
import { ReporteCorrectivoComponent } from './components/reporte-correctivo/reporte-correctivo.component';
import { ReportePreventivoComponent } from './components/reporte-preventivo/reporte-preventivo.component';
import { ReportebajaComponent } from './components/reportebaja/reportebaja.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ConsultaprioritariaComponent } from './components/servicios_Hospital/consultaprioritaria/consultaprioritaria.component';
import { EnfermeriaComponent } from './components/servicios_Hospital/enfermeria/enfermeria.component';
import { InterpretacionComponent } from './components/servicios_Hospital/interpretacion/interpretacion.component';
import { LaboratorioclinicoComponent } from './components/servicios_Hospital/laboratorioclinico/laboratorioclinico.component';
import { ServiciofarmaceuticoComponent } from './components/servicios_Hospital/serviciofarmaceutico/serviciofarmaceutico.component';
import { TempranaComponent } from './components/servicios_Hospital/temprana/temprana.component';
import { UciadultosComponent } from './components/servicios_Hospital/uciadultos/uciadultos.component';
import { UcineonatalComponent } from './components/servicios_Hospital/ucineonatal/ucineonatal.component';
import { UcininosComponent } from './components/servicios_Hospital/ucininos/ucininos.component';
import { UrgenciasComponent } from './components/servicios_Hospital/urgencias/urgencias.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./services/guard/auth.guard";
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },

  
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'inicio',  component: InicioComponent,pathMatch:'full',canActivate: [AuthGuard]},
  {path: 'iniciosesion', component: IniciosesionComponent,canActivate: [AuthGuard]},
  {path: 'equipos', component: EquiposComponent,canActivate: [AuthGuard]},
  {path: 'almacen', component: AlmacenComponent,canActivate: [AuthGuard] },
  {path: 'servicios', component:ServiciosComponent,canActivate: [AuthGuard]},
  {path: 'planificacion', component:PlanificacionComponent,canActivate: [AuthGuard]},
  {path: 'inspecion',component:InspecionComponent,canActivate: [AuthGuard]},
  {path: 'riesgoalto', component:RiesgoaltoComponent,canActivate: [AuthGuard]},
  {path: 'riesgomedio', component:RiesgomedioComponent,canActivate: [AuthGuard]},
  {path: 'riesgobajo', component :RiesgobajoComponent,canActivate: [AuthGuard]},
  {path: 'dadosbaja', component:DadosbajaComponent,canActivate: [AuthGuard]},
  {path: 'uciadultos', component:UciadultosComponent,canActivate: [AuthGuard]},
  {path: 'medicinageneral', component: UcineonatalComponent,canActivate: [AuthGuard]},
  {path: 'ucininos', component: UcininosComponent,canActivate: [AuthGuard]},
  {path: 'urgencias', component: UrgenciasComponent,canActivate: [AuthGuard]},
  {path: 'create-almacen', component: CreateAlmacenComponent,canActivate: [AuthGuard]},
  {path: 'create-almacen/:id', component: CreateAlmacenComponent,canActivate: [AuthGuard]},
  {path: 'menuequipo', component: MenuequipoComponent,canActivate: [AuthGuard]},
  {path: 'menuequipo/:id', component: MenuequipoComponent,canActivate: [AuthGuard]},
  {path: 'hojadevida', component: HojadevidaComponent ,canActivate: [AuthGuard]},
  {path: 'hojadevida/:id', component: HojadevidaComponent },
  {path: 'mantenimientocorrectivo', component: MantenimientocorrectivoComponent,canActivate: [AuthGuard]},
  {path: 'mantenimientocorrectivo/:id', component: MantenimientocorrectivoComponent,canActivate: [AuthGuard]},
  {path: 'mantenimientopreventivo', component: MantenimientopreventivoComponent,canActivate: [AuthGuard]},
  {path: 'mantenimientopreventivo/:id', component: MantenimientopreventivoComponent,canActivate: [AuthGuard]},
  {path: 'inspeccionseguridad', component: InspeccionseguridadComponent,canActivate: [AuthGuard]},
  {path:'inspeccionfuncionamiento', component: InspeccionfuncionamientoComponent,canActivate: [AuthGuard]},
  {path: 'actualizarequipo/:id', component: ActualizarequipoComponent,canActivate: [AuthGuard]},
  {path: 'certificacionmetrologica/:id', component: CertificacionmetrologicaComponent,canActivate: [AuthGuard]},
  {path: 'equipomantenimiento', component: EquipomantenimientoComponent,canActivate: [AuthGuard]},
  {path: 'equipomantenimiento/:id', component: EquipomantenimientoComponent,canActivate: [AuthGuard]},
  {path: 'historialmantenimiento/:id', component: HistorialmantenimientoComponent,canActivate: [AuthGuard]},
  {path: 'historialmantenimiento', component: HistorialmantenimientoComponent,canActivate: [AuthGuard]},
  {path: 'consultaprioritaria', component: ConsultaprioritariaComponent,canActivate: [AuthGuard]},
  {path: 'laboratorioclinico', component: LaboratorioclinicoComponent,canActivate: [AuthGuard]},
  {path: 'serviciofarmaceutico', component:ServiciofarmaceuticoComponent,canActivate: [AuthGuard]},
  {path: 'tomainterpretacion', component: InterpretacionComponent,canActivate: [AuthGuard]},
  {path: 'detenciontemprana', component:TempranaComponent,canActivate: [AuthGuard]},
  {path: 'enfermeria', component: EnfermeriaComponent,canActivate: [AuthGuard]},
  {path: 'historialmantenimientopreventivo/:id', component: HistorialmantenimientopreventivoComponent,canActivate: [AuthGuard]},
  {path: 'porcentajecorrectivo', component: PorcentajeCorrectivoComponent,canActivate: [AuthGuard]},
  {path: 'porcentajespreventivos', component:PorcentajepreventivosComponent,canActivate: [AuthGuard]},
  {path: 'porcentajepresupuesto', component: PorcentajePresupuestoComponent,canActivate: [AuthGuard]},
  {path: 'fallasequipos/:id', component: FallasEquipoComponent,canActivate: [AuthGuard]},
  {path: 'fallaspersonal/:id', component: FallasPersonalComponent,canActivate: [AuthGuard]},
  {path: 'consultoriosmedicinageneral', component:ConsultoriosmedicinaComponent,canActivate: [AuthGuard]},
  {path: 'consultoriosenfermeria', component: ConsultoriosenfermeriaComponent,canActivate: [AuthGuard]},
  {path: 'consultoriosodontologia', component: ConsultoriosodontologiaComponent,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral1', component:Consultoriomedicina1Component,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral2', component:Consultoriomedicina2Component,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral3', component: Consultoriomedicina3Component,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral4', component:Consultoriomedicina4Component,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral5', component:Consultoriomedicina5Component,canActivate: [AuthGuard]},
  {path: 'consultoriomedicinageneral6', component:Consultoriomedicina6Component,canActivate: [AuthGuard]},
  {path:'consultorioenfermeria1', component: Consultorioenfermeria1Component,canActivate: [AuthGuard]},
  {path:'consultorioenfermeria2', component: Consultorioenfermeria2Component,canActivate: [AuthGuard]},
  {path: 'consultorioodontologia1', component: Consultorioodontologia1Component,canActivate: [AuthGuard]},
  {path: 'consultorioodontologia2', component: Consultorioodontologia2Component,canActivate: [AuthGuard]},
  {path: 'consultorioodontologia3', component: Consultorioodontologia3Component,canActivate: [AuthGuard]},
  {path: 'menuhojadevida', component: MenuhojadevidaComponent,canActivate: [AuthGuard]},
  {path: 'menuhojadevida/:id', component: MenuhojadevidaComponent,canActivate: [AuthGuard]},
  {path:'documentosequipos/:id', component: DocumentosequiposComponent,canActivate: [AuthGuard]},
  {path: 'registrarequipo', component: RegistrarequipoComponent,canActivate: [AuthGuard]},
  {path: 'rutinapreventiva/:id', component:RutinapreventivaComponent,canActivate: [AuthGuard]},
  {path: 'mostrarrutina', component: MostrarutinaComponent,canActivate: [AuthGuard]},
  {path: 'fallaselectricas/:id', component: FallaElectricaComponent,canActivate: [AuthGuard]},
  {path: 'clase2a', component:Clase2aComponent,canActivate: [AuthGuard]},
  {path:'darbajaequipo/:id', component:FormatoDarBajaComponent,canActivate: [AuthGuard]},
  {path:'editarusuario/:id', component:EditarusuarioComponent,canActivate: [AuthGuard]},
  {path: 'listausuarios', component:ListausuariosComponent,canActivate: [AuthGuard]},
  {path:'registrarusuario', component:RegistrarusuarioComponent,canActivate: [AuthGuard]},
  {path: 'cronograma', component:CronogramaComponent,canActivate: [AuthGuard]},
  {path: 'equiposdadosbaja/:id', component: EquiposdadosbajaComponent,canActivate: [AuthGuard]},
  {path: 'reportebaja/:id', component: ReportebajaComponent,canActivate: [AuthGuard]},
  {path: 'reportepreventivo/:id', component: ReportePreventivoComponent,canActivate: [AuthGuard]},
  {path: 'reportecorrectivo/:id',component: ReporteCorrectivoComponent,canActivate: [AuthGuard]},
  {path:'protocololimpieza/:id', component: ProtocololimpiezaComponent, canActivate:[AuthGuard]},
  {path:'codigoqr/:id', component: CodigoqrComponent, canActivate:[AuthGuard]}
 

 

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
