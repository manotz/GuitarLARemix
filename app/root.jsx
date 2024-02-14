import { useState, useEffect } from "react";

import {
  Meta, //Este es especial para cargar los metas de html
  Links, //Este es especial en remix sirve para los links de html al inicio
  Outlet, //Se utiliza para renderizar demas paginas de jsx
  Scripts, //Tiene todas las mejoras para que no recargue mal las paginas
  LiveReload, //Ayuda a recargar automaticamente la pagina
  useRouteError,
  isRouteErrorResponse, 
  Link
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function App() {

  const carritoLS = typeof window !=='undefined' ? JSON.parse(localStorage.getItem('carrito') ) ?? [] : [];
  const [carrito,setCarrito] = useState(carritoLS);


  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito])

  const agregarCarrito = guitarra => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
        //iterar sobre el arreglo e identificar el elemento duplicado
        const carritoActualizado = carrito.map(guitarraState => {
          if(guitarraState.id === guitarra.id){
            //rescribir la cantidad
            guitarraState.cantidad = guitarra.cantidad
          }
          return guitarraState;
        })

        //Añadir carrito
        setCarrito(carritoActualizado);
    }else {
      setCarrito([...carrito, guitarra])
    }
  }

  const actulizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {

      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState;
    })
    setCarrito(carritoActualizado);
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id);
    setCarrito(carritoActualizado);
  }

  return (
    <Document>
      <Outlet
        context={{
              agregarCarrito,
              carrito,
              actulizarCantidad,
              eliminarGuitarra
        }}
      />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />

        {children}

        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//Manejo de errores

/*
export function CatchBoundary() {
  const error = useCatch();
  return (
    <Document>
      <p className="error">
        {error.status} {error.statusText}
      </p>
    </Document>
  );
}*/

export function ErrorBoundary() {

    const error = useRouteError();

    if(isRouteErrorResponse(error)){
        return (
            <Document>
                <p className="error">
               {error.status} {error.statusText}
                </p>
                <Link className="error-enlace" to={"/"}>Tal vez quieras volver a la página principal</Link>
            </Document>
        )
    }

    
}
