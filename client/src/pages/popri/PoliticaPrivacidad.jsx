// PoliticaPrivacidad.js

import React from 'react';
import './politicaPrivacidad.css';

const PoliticaPrivacidad = () => {
  // Función para obtener la fecha actual en el formato deseado
  const obtenerFechaActual = () => {
    const currentDate = new Date();
    const day = ("0" + currentDate.getDate()).slice(-2);
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Renderizado del componente
  return (
    <div className="politica-privacidad">
      <h2 className="politica-privacidad__titulo">Política de Privacidad de CS Mayoristas</h2>
      <p className="politica-privacidad__fecha">Última actualización: {obtenerFechaActual()}</p>
      <p>Política de Privacidad de CS Mayoristas <br /> <br />En CS Mayoristas, la privacidad de nuestros visitantes es una prioridad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted nos proporciona al visitar nuestro sitio web. <br /> <br />Recopilación de Información <br /> <br />

Cuando visita nuestro sitio web, podemos recopilar cierta información personal que usted elige proporcionarnos voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono, dirección postal, etc. Utilizamos esta información para fines específicos relacionados con los servicios que ofrecemos y para comunicarnos con usted. <br /> <br />

También podemos recopilar información no identificable personalmente, como su dirección IP, tipo de navegador, páginas visitadas, etc., con el fin de mejorar la experiencia del usuario y comprender mejor cómo se utiliza nuestro sitio web. <br /> <br />

Cookies y Tecnologías Similares <br /> <br />

Utilizamos cookies y tecnologías similares para personalizar y mejorar su experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio. Puede configurar su navegador para que bloquee todas las cookies o para que le avise cuando se envíe una cookie. Sin embargo, algunas partes de nuestro sitio pueden no funcionar correctamente si deshabilita las cookies. <br /> <br />

Uso de la Información <br /> <br />

La información personal que recopilamos se utiliza únicamente para los fines para los que se proporcionó, como procesar pedidos, responder a consultas o proporcionar servicios solicitados. No compartimos su información personal con terceros, excepto en los casos en que sea necesario para cumplir con la ley, proteger nuestros derechos legales o en situaciones de emergencia. <br /> <br />

Enlaces Externos <br /> <br />

Nuestro sitio web puede contener enlaces a otros sitios que no son operados por nosotros. No tenemos control sobre el contenido o las prácticas de privacidad de estos sitios y no nos hacemos responsables de ellos. <br /> <br />

Cambios en la Política de Privacidad <br /> <br />

Nos reservamos el derecho de actualizar o cambiar nuestra Política de Privacidad en cualquier momento. Le recomendamos que revise periódicamente esta página para estar al tanto de cualquier cambio. Su uso continuado de nuestro sitio web después de la publicación de los cambios en esta política se considerará como su aceptación de dichos cambios. <br /> <br />

Preguntas y Contacto <br /> <br />

Si tiene alguna pregunta sobre nuestra Política de Privacidad o sobre cómo manejamos la información personal, no dude en ponerse en contacto con nosotros a través de los medios proporcionados en nuestro sitio web. <br /> <br />

Agradecemos su confianza en nosotros y nos comprometemos a proteger su privacidad en línea.</p>
    </div>
  );
};

export default PoliticaPrivacidad;
