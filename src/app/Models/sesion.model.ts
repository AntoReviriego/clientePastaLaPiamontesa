import { Rol } from "./role.model";


export class Session {
  token: string;
  fechaExpiracion: Date;
  usuario: UsuarioSesion;

  constructor(data: any) {
    this.token = data?.token ?? '';
    this.fechaExpiracion = data?.fechaExpiracion ? new Date(data.fechaExpiracion) : new Date();
    this.usuario = data?.usuario ? new UsuarioSesion(data.usuario) : new UsuarioSesion({});
  }
}
  
export class UsuarioSesion {
    id: number;
    usuario: string;
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    telefono: number;
    rol: string;
    rolId: number;
    permiso: SesionPermiso[];
    roles:Rol[];

    constructor(data: any) {
      this.id = data?.id ?? 0;
      this.usuario = data?.usuario ?? '';
      this.nombre = data?.nombre ?? '';
      this.apellido = data?.apellido ?? '';
      this.direccion = data?.direccion ?? '';
      this.email = data?.email ?? '';
      this.telefono = data?.telefono ?? 0;
      this.rol = data?.rol ?? null;
      this.rolId = data?.rolId ?? 0;
      this.permiso = data?.permiso ? data.permiso.map((p: any) => new SesionPermiso(p)) : [];
      this.roles = data?.roles ? data.roles.map((p: any) => new Rol(p)) : [];
    }
}
  
export class SesionPermiso {
    id: number;
    descripcion: string;
    constructor(data: any) {
      this.id = data?.id ?? 0;
      this.descripcion = data?.descripcion ?? '';
    }
}