<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
import NavBar from '@/components/Navbar.vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  snapAlign: 'center',
  autoplay: 6000,
  transition: 500,
  breakpoints: {
    768: {
      itemsToShow: 1.5
    },
    1024: {
      itemsToShow: 2.2
    },
    1440: {
      itemsToShow: 2.8
    }
  }
}

const projects = [
  {
    title: 'Kinetic',
    image: '/src/assets/img/kinetic.png',
    description:
      'Aplicación móvil para seguimiento de entrenamientos físicos, rutinas de ejercicios, gimnasios cercanos, etc.',
    demo: 'https://demo.com',
    github: 'https://github.com/Eroroshy/kinetic',
    technologies: ['React Native', 'Supabase', 'PostgreSQL']
  },
  {
    title: 'Grimoire.dev',
    image: '/src/assets/img/grimoire.png',
    description:
      'Portafolio personal demo desarrollado en PHP como parte de la materia de Aplicaciones Web.',
    demo: 'https://grimoiredev.xo.je/index.php',
    github: 'https://github.com/Eroroshy/grimoire.dev',
    technologies: ['PHP', 'JavaScript']
  },
  {
    title: 'PrimerPaso.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VMM4KpbcKGwUbAPmwenvP0_QdDTfiG_96-e75pq9nA&s=10',
    description:
      'Portafolio personal demo desarrollado en PHP como parte de la materia de Aplicaciones Web.',
    demo: 'https://primerpasocom.netlify.app/',
    github: 'https://github.com/Eroroshy/primerpaso.com',
    technologies: ['Nuxt.js', 'JavaScript']
  }
]
</script>

<template>
  <DashboardLayout>

    <main id="inicio" class="flex h-100 flex-col items-center justify-center gap-3">
      <h1 class="text-center text-8xl font-bold md:text-7xl sm:text-5xl">ERICK VARGAS</h1>
      <p class="text-center text-4xl sm:text-3xl">DESARROLLADOR <span class="font-bold text-target">FULL-STACK</span>
      </p>
      <a href="mailto:erickdanielvargascorona@gmail.com"
        class="flex items-center justify-center  rounded-xl bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
        <span class="ml-4">erickdanielvargascorona@gmail.com</span>
      </a>
    </main>

    <section id="about" class="py-32">
      <div class="max-w-6xl mx-auto px-6">

        <h2 class="pb-12 text-center text-4xl font-bold text-w sm:text-3xl">
          Sobre mí
        </h2>

        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p class="text-lg leading-9 text-gray-600">
              Soy estudiante de Desarrollo de Software apasionado por la creación
              de aplicaciones web modernas, escalables y con una excelente experiencia
              de usuario.

              Disfruto desarrollar tanto el frontend como el backend,
              aprendiendo constantemente nuevas tecnologías y aplicando
              buenas prácticas de ingeniería de software.
            </p>

            <div class="mt-10 flex flex-wrap gap-4">

              <span class="rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
                Vue
              </span>

              <span class="rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
                Laravel
              </span>

              <span class="rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
                Node.js
              </span>

              <span class="rounded-full bg-indigo-100 px-5 py-2 text-indigo-700">
                PostgreSQL
              </span>

            </div>

          </div>

          <div class="flex justify-center">

            <div class="flex items-center justify-center w-80 h-80 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-2xl" >
              <img src="/src/assets/img/fotodeamentis.png" class="w-70 h-70 rounded-3xl shadow-2xl">
            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="proyectos" class="py-32">

      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-center text-4xl font-bold mb-16">
          Proyectos
        </h2>

        <Carousel v-bind="carouselConfig">

          <Slide v-for="project in projects" :key="project.title">

            <div
              class="mx-4 overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">

              <!-- Imagen -->

              <img :src="project.image" :alt="project.title" class="h-60 w-full object-cover">

              <!-- Contenido -->

              <div class="flex flex-col flex-1 p-8">

                <h3 class="text-2xl font-bold">
                  {{ project.title }}
                </h3>

                <p class="mt-4 text-gray-600 leading-7 flex-1">
                  {{ project.description }}
                </p>

                <!-- Tecnologías -->

                <div class="mt-6 flex flex-wrap gap-2">

                  <span v-for="tech in project.technologies" :key="tech"
                    class="hidden sm:flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                    {{ tech }}
                  </span>

                </div>

                <!-- Botones -->

                <div class="mt-8 flex gap-4">

                  <a :href="project.demo" target="_blank"
                    class="flex-1 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white hover:bg-indigo-700 transition">
                    Demo
                  </a>

                  <a :href="project.github" target="_blank"
                    class="flex-1 rounded-xl border border-gray-300 py-3 text-center font-semibold hover:bg-gray-100 transition">
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>

        </Carousel>

      </div>

    </section>

    <section id="skills" class="py-16">
      <div class="mx-auto max-w-5xl">
        <h2 class="pb-12 text-center text-4xl font-bold text-w sm:text-3xl">SKILLS</h2>
        <div class="flex flex-wrap justify-center text-white gap-8" style="opacity: 1; transform: none;">
          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="HTML" loading="lazy" width="40" height="40" decoding="async"
              data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">HTML</div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="CSS" loading="lazy" width="40" height="40" decoding="async"
              data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">CSS</div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="JavaScript" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">JavaScript
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="TypeScript" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">TypeScript
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="TypeScript" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg">Vue
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="TypeScript" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg">React Native
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="Tailwindcss" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg">Tailwindcss
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="Node.js" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">Node.js</div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="PostgreSQL" loading="lazy" width="40" height="40"
              decoding="async" data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg">PostgreSQL
          </div>

          <div class="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="Git" loading="lazy" width="40" height="40" decoding="async"
              data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg">Git</div>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-32">

      <div class="max-w-4xl mx-auto text-center">

        <h2 class="text-5xl font-bold">
          Trabajemos juntos.
        </h2>

        <p class="mt-8 text-xl text-gray-600">

          Actualmente me encuentro abierto a oportunidades
          como desarrollador Full Stack y prácticas profesionales.

        </p>

        <div class="mt-12 flex justify-center gap-6">

          <a href="mailto:erickdanielvargascorona@gmail.com" class="rounded-xl bg-indigo-600 px-8 py-4 text-white hover:bg-indigo-700">

            Enviar correo

          </a>

          <a href="hhttps://github.com/Eroroshy" class="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-100">

            GitHub

          </a>

          <a href="https://www.linkedin.com/in/erick-daniel-vargas-corona-956903281/" class="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-100">

            LinkedIn

          </a>

        </div>

      </div>

    </section>


  </DashboardLayout>
</template>

<style scoped>
.carousel__prev,
.carousel__next {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  background: white;
  color: #4f46e5;
  box-shadow: 0 8px 24px rgb(0 0 0 / 0.12);
  transition: .3s;
}

.carousel__prev:hover,
.carousel__next:hover {
  background: #4f46e5;
  color: white;
}

.carousel__pagination-button::after {
  width: 12px;
  height: 12px;
  border-radius: 9999px;
}

.carousel__pagination-button--active::after {
  background: #4f46e5;
}
</style>