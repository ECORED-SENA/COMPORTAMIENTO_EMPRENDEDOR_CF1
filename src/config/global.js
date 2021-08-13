export default {
  global: {
    componenteFormativo: 'Elementos del comportamiento emprendedor',
    descripcionCurso:
      'El fundamento de los procesos enseñanza-aprendizaje es la contextualización de la temática a trabajar; así, el propósito aquí es presentar los elementos clave del comportamiento emprendedor, desarrollados por David McClelland en los años 60 desde de la psicología, y basados en la definición de emprendimiento como una actitud que motiva a las personas hacia el logro de objetivos.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características emprendedoras personales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Visión emprendedora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Dimensiones emprendedoras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta, G., Pérez, J., Rodríguez, M., y Valenzuela, M. (2016). Cartilla emprendimiento. SENA.',
      link: '',
    },
    {
      referencia: 'Ariza, C. (2019). Pensar, sentir y actuar',
      link: 'https://mejorapsicologia.com/pensar-sentir-actuar/',
    },
    {
      referencia:
        'Cenpromype. (s.f.). Proceso de acompañamiento a emprendimientos dinámicos. Caja de herramientas. ',
      link:
        'http://cenpromype.synology.me/wordpress/Usb/Caja%20de%20Herramientas%20Emprendimientos%20por%20Oportunidad/LinkedDocuments/Manual%20Participante%20Taller%20de%20Caracteristicas%20Emprendedoras%20PErsonales.pdf',
    },
    {
      referencia:
        'Fernández, A. (2010). Otra vez esa sensación, capítulo 1: Los sentimientos. ',
      link:
        'http://catarina.udlap.mx/u_dl_a/tales/documentos/lda/fernandez_f_a/capitulo1.pdf',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla de comportamiento emprendedor ¡camino al logro! SENA. ',
    },
    {
      referencia:
        'Hernández, E. (2014). Avances de Empretec® en Colombia, como programa para el fortalecimiento de las características del comportamiento emprendedor. Inventum, 9(16), 33-39.',
    },
    {
      referencia:
        'McClelland, D. C. (1961). Entrepreneurial behavior. In D. C. McClelland, The achieving society (p. 205-258). D Van Nostrand Company',
      link: 'https://doi.org/10.1037/14359-006',
    },
    {
      referencia:
        'McClelland, D. C. (1965). N achievement and entrepreneurship: A longitudinal study. Journal of Personality and Social Psychology, 1(4), 389–392',
      link: 'https://doi.org/10.1037/h0021956',
    },
    {
      referencia: 'Monsalve, J. (2013). Jóvenes, talento y perfil emprendedor.',
      link:
        'http://www.injuve.es/conocenos/ediciones-injuve/guia-jovenes-talento-y-perfil-emprendedor',
    },
    {
      referencia:
        'Pulgarín, S., y Cardona, M. (2011). Caracterización del comportamiento emprendedor para los estudiantes de administración de la Universidad del Rosario. Revista EAN, (71), 22-30..',
    },
    {
      referencia:
        'Sánchez, J. (2011). Entrepreneurship as a legitimate field of knowledge. Psicothema, 23(3), 427-432.',
    },
    {
      referencia:
        'Universidad de Alicante. (2007). El pensamiento, Psicología Básica.',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/4298/5/TEMA%205.EL%20PENSAMIENTO.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comportamiento emprendedor',
      significado:
        'Conjunto de respuestas generadas por los individuos a estímulos de su entorno, basadas en la automotivación. El comportamiento emprendedor se manifiesta en una persona que es capaz de asumir una tarea, perseverar en ella, desarrollarla y resolver cualquier contratiempo que se produzca en el proceso.',
    },
    {
      termino: 'Características emprendedoras personales',
      significado:
        'Rasgos de la personalidad ligadas a las motivaciones de los individuos (logro, afiliación y poder) y que están asociadas al éxito de cualquier proyecto personal. Se basan en las investigaciones del psicólogo David McClelland realizadas en la década de los años 60. .',
    },
    {
      termino: 'Visión emprendedora',
      significado:
        'Identificación de la meta u objetivo que se planea alcanzar en el futuro. De manera simple la visión puede definirse como los sueños en acción. La visión une los deseos, las expectativas y las metas que desea lograr en su vida, en distintos órdenes y esferas, situados en el ámbito del trabajo..',
    },
    {
      termino: 'Motivación',
      significado:
        'Estado interno que incita, dirige y mantiene la conducta. Es el impulso y el esfuerzo para satisfacer un deseo o meta. ',
    },
    {
      termino: 'Triángulo de la responsabilidad',
      significado:
        'Esquema que vincula a la persona, el proyecto y la situación, mostrando el equilibrio que es necesario lograr en todo accionar emprendedor. Responsabilidad se entiende como la capacidad de la persona de responder ante las diferentes situaciones que se puedan presentar de una manera proactiva. ',
    },
  ],
  complementario: [
    {
      texto:
        'Cartilla de comportamiento emprendedor ¡camino al logro!-Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla de comportamiento emprendedor ¡camino al logro! SENA – Fondo Emprender.',
      tipo: 'Libro',
      link: 'https://repositorio.sena.edu.co/handle/11404/7061',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Paula Gómez Franco',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'Dirección de empleo, trabajo y emprendimiento - SENA',
      },
      {
        nombre: 'Genny Andrea García Pereira',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'Dirección de empleo, trabajo y emprendimiento - SENA',
      },
      {
        nombre: 'Luisa Fernanda Martínez Vega',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'SENA. Dirección de empleo, trabajo y emprendimiento - SENA',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },

      {
        nombre: 'Miguel Ricardo Rivera Lizcano',
        cargo: 'Experto temático',
        centro: 'Sena - Regional Huila',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Zenen Arévalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      //{
      //  nombre: 'Nombre',
      //  cargo: 'Producción audiovisual',
      //  centro:
      //    'Centro Industrial del Diseño y la Manufactura Regional Santander',
      //},
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
