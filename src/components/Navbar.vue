<template>
    <header class="sticky top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-gray-200 z-50">
        <nav class="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
            <!-- Nombre -->
            <div class="text-2xl font-mono tracking-wide text-gray-900 cursor-pointer hover:text-gray-500 transition-all duration-300">
                <a href="#inicio">&lt;E.Vargas/&gt;</a>
            </div>

            <!-- Navegación -->
            <ul class="hidden md:flex items-center gap-10 text-gray-600 font-medium">
                <li>
                    <a href="#inicio" class="hover:text-gray-900 transition duration-200">
                        Inicio
                    </a>
                </li>

                <li>
                    <a href="#about" class="hover:text-gray-900 transition duration-200">
                        Sobre mí
                    </a>
                </li>

                <li>
                    <a href="#proyectos" class="hover:text-gray-900 transition duration-200">
                        Proyectos
                    </a>
                </li>

                <li>
                    <a href="#skills" class="hover:text-gray-900 transition duration-200">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#contacto" class="hover:text-gray-900 transition duration-200">
                        Contacto
                    </a>
                </li>
            </ul>

            <!-- Botón CV -->
                <a href="/README.md" download
                    class="hidden md:inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    Descargar CV

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l4-4m-4 4l-4-4M4 21h16" />
                    </svg>
                </a>
        </nav>
    </header>
</template>