<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 A continuación, se presenta el video que hará una breve introducción del presente componente formativo.

    figure.mb-5
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-md-8.col-lg-6.col-xl-10
          .video.mb-3 
            iframe(width="560" height="315" src="https://www.youtube.com/embed/h17aMhUau14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption 
    
    p.mb-3 Antes de iniciar esta formación, es importante conocer el significado de la palabra emprendimiento, cuyo concepto proviene del término inglés <b> <i>entrepreneur</i> </b> que significa “pionero” que es una persona que tiene la capacidad de hacer un esfuerzo adicional para alcanzar una meta; alguien que comienza una travesía en busca de nuevos horizontes. 

    p.mb-3 El emprendimiento es la actitud que permite decidirse por una idea que se convertirá en un proyecto de vida, ya sea en términos sociales, individuales, culturales y económicos. El interés primordial del emprendimiento no se centra únicamente en la posibilidad de consolidar una idea de negocio y crear empresa; así el emprendimiento está relacionado con el desarrollo humano y económico, con el mejoramiento de las condiciones de vida en los contextos en los que tiene impacto la idea y la concreción de las aspiraciones personales que motivan al emprendedor.

    p.mb-3 En este orden de ideas, emprender es el proceso por el cual se pasa de la idea a la acción. Por supuesto, ese proceso trae consigo determinado nivel de riesgo. Es allí donde radica el componente novedoso de la actividad emprendedora, es decir, la posibilidad de innovar y crear valor a través de las ideas.

    p.mb-3 En resumen, el emprendedor es una persona que se compromete con el desarrollo de un proyecto, que no es más que una idea que genera valor para un individuo, o una comunidad, en un determinado contexto. En este primer tema, se conocerán las características que ayudan a los emprendedores en el logro de sus objetivos: las características emprendedoras personales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
