//Se agrega la palabra "export", para realizar al importacion del archivo a otro modulo

export type Tallas = 'S'|'M'|'S'|'XL';

export type Product = {
        name: string,
        create: Date,
        strok: number,
        size?: Tallas
      };
