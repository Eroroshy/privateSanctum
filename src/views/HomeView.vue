<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  snapAlign: 'center',
  autoplay: 6000,
  transition: 500,
  breakpoints: {
    768: { itemsToShow: 1.5 },
    1024: { itemsToShow: 2.2 },
    1440: { itemsToShow: 2.8 }
  }
}

const aboutTechnologies = ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS']

const projects = [
  {
    title: 'Kinetic',
    image: 'https://i.imgur.com/CHIgyJt.png',
    description: 'Aplicación móvil enfocada al seguimiento de entrenamientos físicos, gestión de rutinas personalizadas y geolocalización de gimnasios cercanos.',
    demo: 'https://demo.com',
    github: 'https://github.com/Eroroshy/kinetic',
    technologies: ['React Native', 'Supabase', 'PostgreSQL']
  },
  {
    title: 'Grimoire.dev',
    image: 'https://i.imgur.com/iLXofBp.png',
    description: 'Portafolio web minimalista desarrollado como plataforma de demostración para la gestión de proyectos y despliegue de arquitecturas en backend monolítico.',
    demo: 'https://grimoiredev.xo.je/index.php',
    github: 'https://github.com/Eroroshy/grimoire.dev',
    technologies: ['PHP', 'JavaScript']
  },
  {
    title: 'PrimerPaso.com',
    image: 'https://i.imgur.com/PFrwTbJ.png',
    description: 'Plataforma web enfocada en conectar estudiantes y empresas, facilitando el acceso a oportunidades laborales y desarrollo de talento joven.',
    demo: 'https://primerpasocom.netlify.app/',
    github: 'https://github.com/Eroroshy/primerpaso.com',
    technologies: ['Nuxt.js', 'JavaScript']
  }
]

const skills = [
  { title: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { title: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { title: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { title: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { title: 'Vue', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { title: 'React Native', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg' },
  { title: 'Tailwindcss', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { title: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { title: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { title: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]
</script>

<template>
  <DashboardLayout>

    <!-- Hero Section -->
    <main id="inicio"
      class="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-20 md:py-32 mx-auto max-w-6xl w-full">
      <div class="text-center w-full max-w-4xl mx-auto">
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">
          ERICK VARGAS
        </h1>
        <p class="mt-4 text-lg text-gray-600 sm:text-xl md:text-3xl font-medium tracking-wide">
          DESARROLLADOR <span class="font-bold text-indigo-600 block sm:inline">FULL-STACK</span>
        </p>
      </div>

      <div class="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
        <a href="mailto:erickdanielvargascorona@gmail.com"
          class="flex w-full sm:w-auto items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-white font-semibold shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-200 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="flex-shrink-0 mr-2">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span class="truncate">Contactar por correo</span>
        </a>
        <a href="/CV_Erick_Vargas.pdf" download
          class="flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="flex-shrink-0 mr-2 text-gray-500">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Descargar CV
        </a>
      </div>
    </main>

    <!-- About Me Section -->
    <section id="about" class="py-20 md:py-32 border-t border-gray-100">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 md:mb-16">
          Sobre mí
        </h2>

        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <p class="text-lg leading-relaxed text-gray-600">
              Soy estudiante de Ingeniería en Desarrollo de Software enfocado en la creación de aplicaciones web y móviles, con experiencia en el desarrollo de proyectos Full Stack.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              Mi curiosidad es el principal motor que me impulsa a aprender y explorar nuevas tecnologías, siempre buscando mejorar mis habilidades y mantenerme actualizado.
            </p>

            <div class="mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5">
              <span v-for="tech in aboutTechnologies" :key="tech"
                class="rounded-lg bg-indigo-50 px-3.5 py-1.5 text-xs font-bold text-indigo-700 border border-indigo-100/60">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="order-1 flex justify-center lg:order-2">
            <div
              class="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-xl shadow-indigo-500/20 md:h-80 md:w-80">
              <img src="/src/assets/img/fotodeamentis.png" alt="Foto de Erick Vargas"
                class="h-[96%] w-[96%] rounded-[22px] object-cover bg-white">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <section id="proyectos" class="py-20 md:py-32 border-t border-gray-100">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 md:mb-16">
          Proyectos Destacados
        </h2>

        <Carousel v-bind="carouselConfig" class="py-2">
          <Slide v-for="project in projects" :key="project.title" class="py-2">
            <div
              class="mx-3 flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img :src="project.image" :alt="`Captura de pantalla de ${project.title}`"
                class="h-56 w-full object-cover">

              <div class="flex flex-1 flex-col p-6 sm:p-8">
                <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
                <p class="mt-3 flex-1 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {{ project.description }}
                </p>

                <div class="mt-5 flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    {{ tech }}
                  </span>
                </div>

                <!-- Botones unificados dentro de las Cards -->
                <div class="mt-8 flex flex-col sm:flex-row gap-3">
                  <a :href="project.demo" target="_blank" rel="noopener noreferrer"
                    class="flex-1 inline-flex items-center justify-center rounded-xl bg-indigo-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-200">
                    Demo
                  </a>
                  <a :href="project.github" target="_blank" rel="noopener noreferrer"
                    class="flex-1 inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white py-2.5 text-center text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all duration-200">
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

    <!-- Skills -->
    <section id="skills" class="py-20 md:py-32 border-t border-gray-100">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 md:mb-16">
          Habilidades Técnicas
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div v-for="skill in skills" :key="skill.title"
            class="flex items-center gap-3 rounded-xl bg-white border border-gray-200/80 p-4 font-medium text-sm sm:text-base text-gray-700 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:border-indigo-100 md:hover:shadow-lg md:hover:shadow-indigo-500/5">
            <img :alt="`Logo de ${skill.title}`" loading="lazy" width="28" height="28"
              class="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0" :src="skill.image">
            <span class="truncate font-semibold">{{ skill.title }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto"
      class="py-20 md:py-32 bg-gradient-to-b from-transparent to-slate-50/50 border-t border-gray-100">
      <div class="mx-auto max-w-6xl px-6 text-center">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
          Trabajemos juntos
        </h2>
        <p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          Actualmente me encuentro abierto a oportunidades como desarrollador Full Stack y prácticas profesionales.
          ¡Hablemos!
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <a href="mailto:erickdanielvargascorona@gmail.com"
            class="flex w-full sm:w-auto items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-white font-semibold shadow-sm hover:bg-indigo-700 hover:shadow-md active:scale-[0.98] transition-all duration-200 text-sm sm:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="flex-shrink-0 mr-2">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Contactar por correo
          </a>

          <a href="https://github.com/Eroroshy" target="_blank" rel="noopener noreferrer"
            class="flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 text-sm sm:text-base">
            <svg class="mr-2 h-5 w-5 fill-current text-gray-900 flex-shrink-0" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.068.069-.068 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/erick-daniel-vargas-corona-956903281/" target="_blank"
            rel="noopener noreferrer"
            class="flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-gray-700 font-semibold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 text-sm sm:text-base">
            <svg class="mr-2 h-5 w-5 fill-current text-[#0077B5]" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
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
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.carousel__prev:hover,
.carousel__next:hover {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.carousel__pagination-button::after {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background-color: #d1d5db;
  transition: all 0.3s ease;
}

.carousel__pagination-button:hover::after {
  background-color: #9ca3af;
}

.carousel__pagination-button--active::after {
  background-color: #4f46e5;
  width: 24px;
}
</style>