<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Características emprendedoras personales

    p.mb-5 Debido al gran impacto que el emprendimiento ha generado en las economías y sociedades del mundo en las últimas décadas, la comunidad científica ha volcado sus esfuerzos hacia la comprensión de ese fenómeno. Los psicólogos, en particular, han indagado acerca de los elementos que han llevado a personas comunes a lograr resultados extraordinarios en respuesta a alguna necesidad propia o de su entorno.  

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-12.mb-5
        img(src="@/assets/curso/images/tema1/img_1.svg" alt="", style="width:600px;").m-auto

    p.mb-3 Como resultado de esas investigaciones, se han identificado un conjunto de características que están presentes, en mayor o menor medida, en todos los seres humanos, y que influyen en el desempeño de los individuos para la realización de cualquier tarea. Ese conjunto de diez características se ha denominado “características emprendedoras personales”. 

    p.mb-5 A continuación, se presentan las características emprendedoras personales:

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-6.col-xl-10
        .video.mb-3 
    
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption 




























   
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
