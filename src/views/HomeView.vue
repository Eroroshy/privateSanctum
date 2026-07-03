<script setup>
import DashboardLayout from '../layouts/DashboardLayout.vue'
import NavBar from '@/components/Navbar.vue'
</script>

<template>
  <DashboardLayout>

    <main id="inicio" class="flex h-100 flex-col items-center justify-center gap-3">
      <h1 class="text-center text-8xl font-bold md:text-7xl sm:text-5xl">ERICK VARGAS</h1>
      <p class="text-center text-4xl sm:text-3xl">DESARROLLADOR <span class="font-bold text-target">FULL-STACK</span></p> 
      <a href="mailto:erickdanielvargascorona@gmail.com" class="flex items-center justify-center  rounded-xl bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
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

            <div class="w-80 h-80 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-2xl">

            </div>

          </div>

        </div>

      </div>
    </section>

    <section id="proyectos">
    </section>

    <section id="skills" class="py-16">
      <div class="mx-auto max-w-5xl">
        <h2 class="pb-12 text-center text-4xl font-bold text-w sm:text-3xl">SKILLS</h2>
        <div class="flex flex-wrap justify-center gap-6">
          
          <div class="flex items-center gap-3 rounded-lg px-4 py-2 font-bold bg-indigo-600"
            style="opacity: 1; transform: none;"><img alt="HTML" loading="lazy" width="40" height="40" decoding="async"
              data-nimg="1" class="sm:h-8 sm:w-8" style="color:transparent"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">HTML</div>





          <div class="flex items-center gap-3 rounded-xl bg-secondary px-4 py-2 font-bold bg-indigo-600"
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
          como desarrollador Full Stack, prácticas profesionales
          y proyectos freelance.

        </p>

        <div class="mt-12 flex justify-center gap-6">

          <a href="mailto:erick..." class="rounded-xl bg-indigo-600 px-8 py-4 text-white hover:bg-indigo-700">

            Enviar correo

          </a>

          <a href="https://github.com/..." class="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-100">

            GitHub

          </a>

          <a href="https://linkedin.com/..." class="rounded-xl border border-gray-300 px-8 py-4 hover:bg-gray-100">

            LinkedIn

          </a>

        </div>

      </div>

    </section>


  </DashboardLayout>
</template>
