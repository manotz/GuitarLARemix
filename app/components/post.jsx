import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";

const Post = ({post}) => {

    const {titulo, imagen, url,contenido, publishedAt} = post.attributes;
    const image = imagen.data.attributes.formats.small.url;

  return (
    <article className="post">
        <img src={image}  className="imagen" alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido[0].children[0].text}</p>
            <Link className="enlace" to={`/blog/${url}`}>Leer Entrada</Link>
        </div>
    </article>
  )
}

export default Post
