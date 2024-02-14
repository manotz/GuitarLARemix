import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description : "Venta de guitarras, blog de música"
    },
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {


  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            consequuntur aliquam non eaque labore quisquam quam unde iure. Eum,
            quisquam ea nostrum molestias blanditiis distinctio et cupiditate
            amet consectetur eaque? Molestiae reprehenderit unde vero
            voluptatibus distinctio beatae cupiditate ea. Pariatur, odit
            molestiae ipsum voluptate nemo totam consequuntur reprehenderit esse
            recusandae maxime illo placeat saepe in natus fugiat nobis
            perspiciatis rerum.
            Pariatur, odit molestiae ipsum voluptate nemo totam consequuntur reprehenderit esse
            recusandae maxime illo placeat saepe in natus fugiat nobis
            perspiciatis rerum.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
