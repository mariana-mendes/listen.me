import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(data: any[],
            texto: string,
            coluna: string ): any[] {

  if (texto === '') {
    return data;
  }

  texto = texto.toLowerCase();


  return data.filter( item => {
    return item[coluna].toLowerCase()
        .includes(texto);
  })

  }

}
