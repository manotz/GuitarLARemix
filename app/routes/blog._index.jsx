import { useLoaderData } from '@remix-run/react';
import {getPosts} from '~/models/posts.server';
import ListadoBlog from '../components/listadoBlog';

export function meta() {
    return [
        {title: 'GuitarLA - Nuestro Blog' },
        {description: 'GuitarLA, Blog de música y venta de guitarras'}
    ]
}


export async function loader(){

  const posts = await getPosts();

  return posts.data
}



const Blog = () => {

  const posts = useLoaderData();
  return (
      <ListadoBlog 
        posts = {posts}
      />
  )
}

export default Blog;
