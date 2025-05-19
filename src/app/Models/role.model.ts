export class Rol {
  Id: number;
  Descripcion:string;
  Enable:string
  
  constructor(data: any) {
    this.Id = data.id || 0;
    this.Descripcion = data.descripcion || '';
    this.Enable = data.enable || false;
  }
}
  