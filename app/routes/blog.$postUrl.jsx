import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export async function loader({params}){

    const {postUrl} = params;
    
    const respuesta = await getPost(postUrl); 

    if(respuesta.data.length === 0){
        throw new Response('',{
            status:404,
            statusText: 'Entrada no encontrada'
        })
    }
     
  return respuesta.data;
}

export function meta({data}){

    if(!data){
        return [
            {title: 'GuitarLA - Entrada no Encotrada'},
            {description: 'Blog, entrada no encontrada'}
        ]
    }

    const {titulo} = data[0].attributes;
    return [
        {title: `GuitarLA - ${titulo}`},
        {description: `Blog, venta de guitarras ${titulo}`}
    ]
}


const Post = () => {
  
    const post = useLoaderData();

    const {titulo, publishedAt} = post[0].attributes;
    const content = post[0].attributes.contenido[0].children[0].text;
    const image = post[0].attributes.imagen.data.attributes.url;

    return (
        <article className="post mt-3">
        <img src={image}  className="imagen" alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>

            <p className="fecha">{formatearFecha(publishedAt)}</p>

            {post[0].attributes.contenido ? (
                post[0].attributes.contenido.map(text => (
                    <p className="texto">{text.children[0].text}</p>
                ))
            ) : null}
        </div>
    </article>
  )
}

export default Post
