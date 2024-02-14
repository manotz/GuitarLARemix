import React from 'react'

const Curso = ({curso}) => {

    const {contenido, titulo, imagen } = curso;
    const content = contenido[0].children[0].text;
    const image = imagen.data.attributes.url;

  return (
    <section className='curso'>

        <style jsx="true">
           {`
            .curso {
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 /.7)), url(${image});
            }

           `}
        </style>


        <div className='contenedor curso-grid'>
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className='texto'>{content}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso
