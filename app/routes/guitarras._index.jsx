import { useLoaderData} from '@remix-run/react';
import {getGuitarras} from '~/models/guitarras.server';
import ListadoGuitarras from '../components/listadoGuitarras';

export function meta(){
  return [
    {title: 'GuitarLA - Tienda de Guitarras'},
    {description: 'GuitarLA - Nuestra colección de guitarras'}
  ]
}

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data
}

const Tienda = () => {

  const guitarras = useLoaderData(); //despues de hacer la funcion en el servidor usamos el loader para      cargar los datos que obtuvimos antes

  return (
      <ListadoGuitarras
        guitarras = {guitarras}
      />
  )
}

export default Tienda;
