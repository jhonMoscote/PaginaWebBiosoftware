import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { DadosbajaComponent } from './components/almacen_Equipos/dadosbaja/dadosbaja.component';
import { RiesgoaltoComponent } from './components/almacen_Equipos/riesgoalto/riesgoalto.component';
import { RiesgobajoComponent } from './components/almacen_Equipos/riesgobajo/riesgobajo.component';
import { RiesgomedioComponent } from './components/almacen_Equipos/riesgomedio/riesgomedio.component';
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
import { EjecucionComponent } from './components/ejecucion/ejecucion.component';
import { EquipomantenimientoComponent } from './components/equipomantenimiento/equipomantenimiento.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { FallasEquipoComponent } from './components/fallas-equipo/fallas-equipo.component';
import { FallasPersonalComponent } from './components/fallas-personal/fallas-personal.component';
import { GestionComponent } from './components/gestion/gestion.component';
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
import { ProtocololimpiezaComponent } from './components/hojadevida/protocololimpieza/protocololimpieza.component';
import { InformacionEquipoComponent } from './components/informacion-equipo/informacion-equipo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InspecionComponent } from './components/inspecion/inspecion.component';
import { MenuequipoComponent } from './components/menuequipo/menuequipo.component';
import { MenuhojavidaComponent } from './components/menuhojavida/menuhojavida.component';
import { PlanificacionComponent } from './components/planificacion/planificacion.component';
import { PorcentajeCorrectivoComponent } from './components/porcentaje-correctivo/porcentaje-correctivo.component';
import { PorcentajePresupuestoComponent } from './components/porcentaje-presupuesto/porcentaje-presupuesto.component';
import { PorcentajepreventivosComponent } from './components/porcentajepreventivos/porcentajepreventivos.component';
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


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path: 'inicio', component: InicioComponent,pathMatch:'full'},
  {path: 'equipos', component: EquiposComponent},
  {path: 'almacen', component: AlmacenComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'planificacion', component:PlanificacionComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'ejecucion', component:EjecucionComponent},
  {path: 'inspecion',component:InspecionComponent},
  {path: 'informacion-equipo', component:InformacionEquipoComponent},
  {path: 'riesgoalto', component:RiesgoaltoComponent},
  {path: 'riesgomedio', component:RiesgomedioComponent},
  {path: 'riesgobajo', component :RiesgobajoComponent},
  {path: 'dadosbaja', component:DadosbajaComponent},
  {path: 'uciadultos', component:UciadultosComponent},
  {path: 'medicinageneral', component: UcineonatalComponent},
  {path: 'ucininos', component: UcininosComponent},
  {path: 'urgencias', component: UrgenciasComponent},
  {path: 'create-almacen', component: CreateAlmacenComponent},
  {path: 'create-almacen/:id', component: CreateAlmacenComponent},
  {path: 'menuequipo', component: MenuequipoComponent},
  {path: 'menuequipo/:id', component: MenuequipoComponent},
  {path: 'menuhojavida', component: MenuhojavidaComponent},
  {path: 'hojadevida', component: HojadevidaComponent},
  {path: 'hojadevida/:id', component: HojadevidaComponent},
  {path: 'mantenimientocorrectivo', component: MantenimientocorrectivoComponent},
  {path: 'mantenimientocorrectivo/:id', component: MantenimientocorrectivoComponent},
  {path: 'mantenimientopreventivo', component: MantenimientopreventivoComponent},
  {path: 'mantenimientopreventivo/:id', component: MantenimientopreventivoComponent},
  {path: 'protocololimpieza', component: ProtocololimpiezaComponent},
  {path: 'inspeccionseguridad', component: InspeccionseguridadComponent},
  {path:'inspeccionfuncionamiento', component: InspeccionfuncionamientoComponent},
  {path: 'actualizarequipo/:id', component: ActualizarequipoComponent},
  {path: 'certificacionmetrologica', component: CertificacionmetrologicaComponent},
  {path: 'equipomantenimiento', component: EquipomantenimientoComponent},
  {path: 'equipomantenimiento/:id', component: EquipomantenimientoComponent},
  {path: 'historialmantenimiento/:id', component: HistorialmantenimientoComponent},
  {path: 'historialmantenimiento', component: HistorialmantenimientoComponent},
  {path: 'consultaprioritaria', component: ConsultaprioritariaComponent},
  {path: 'laboratorioclinico', component: LaboratorioclinicoComponent},
  {path: 'serviciofarmaceutico', component:ServiciofarmaceuticoComponent},
  {path: 'tomainterpretacion', component: InterpretacionComponent},
  {path: 'detenciontemprana', component:TempranaComponent},
  {path: 'enfermeria', component: EnfermeriaComponent},
  {path: 'historialmantenimientopreventivo/:id', component: HistorialmantenimientopreventivoComponent},
  {path: 'porcentajecorrectivo', component: PorcentajeCorrectivoComponent},
  {path: 'porcentajespreventivos', component:PorcentajepreventivosComponent},
  {path: 'porcentajepresupuesto', component: PorcentajePresupuestoComponent},
  {path: 'fallasequipos/:id', component: FallasEquipoComponent},
  {path: 'fallaspersonal/:id', component: FallasPersonalComponent},
  {path: 'consultoriosmedicinageneral', component:ConsultoriosmedicinaComponent},
  {path: 'consultoriosenfermeria', component: ConsultoriosenfermeriaComponent},
  {path: 'consultoriosodontologia', component: ConsultoriosodontologiaComponent},
  {path: 'consultoriomedicinageneral1', component:Consultoriomedicina1Component},
  {path: 'consultoriomedicinageneral2', component:Consultoriomedicina2Component},
  {path: 'consultoriomedicinageneral3', component: Consultoriomedicina3Component},
  {path: 'consultoriomedicinageneral4', component:Consultoriomedicina4Component},
  {path: 'consultoriomedicinageneral5', component:Consultoriomedicina5Component},
  {path: 'consultoriomedicinageneral6', component:Consultoriomedicina6Component},
  {path:'consultorioenfermeria1', component: Consultorioenfermeria1Component},
  {path:'consultorioenfermeria2', component: Consultorioenfermeria2Component},
  {path: 'consultorioodontologia1', component: Consultorioodontologia1Component},
  {path: 'consultorioodontologia2', component: Consultorioodontologia2Component},
  {path: 'consultorioodontologia3', component: Consultorioodontologia3Component},
  {path: 'menuhojadevida', component: MenuhojadevidaComponent},
  {path: 'menuhojadevida/:id', component: MenuhojadevidaComponent},
  {path:'documentosequipos/:id', component: DocumentosequiposComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
