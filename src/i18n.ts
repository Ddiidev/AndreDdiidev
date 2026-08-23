import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    profile: 'Perfil',
    role: 'Fullstack Developer (.NET & Vue.js)',
    tabs: {
      about: 'Sobre',
      projects: 'Projetos'
    },
    about: {
      summary_title: 'Resumo',
      summary_text: 'Desenvolvedor Fullstack especialista no ecossistema .NET e Vue.js, com domínio técnico em <a href="https://vlang.io/" target="_blank">V (Vlang)</a> para soluções de alta performance. Foco em arquiteturas escaláveis e modernização de sistemas legados.',
      skills_title: 'Skills',
      skills: {
        backend: 'Backend: C#, .NET 9, <a href="https://vlang.io/" target="_blank">V (Vlang)</a>, Node.js',
        frontend: 'Frontend: Vue.js, TypeScript, React',
        database: 'Database: SQL Server, PostgreSQL, MongoDB',
        devops: 'DevOps: Docker, Nginx, GitFlow'
      }
    },
    projects: {
      highlights_title: 'Destaques',
      brasilapi_desc: 'SDK em <a href="https://vlang.io/" target="_blank">V</a> para integração com serviços nacionais.',
      tabua_desc: 'API REST pública para monitoramento de marés (em <a href="https://vlang.io/" target="_blank">V</a>).',
      json2v_desc: 'Ferramenta que converte JSON em structs para a linguagem <a href="https://vlang.io/" target="_blank">V (Vlang)</a>.',
      aceitatempo_desc: 'Extensão de navegador que converte o preço de um produto nas horas de trabalho necessárias para pagá-lo.',
      all_repos: 'Projetos Selecionados',
      view_all_github: 'Ver todos os repositórios no GitHub',
      language: 'Linguagem',
      stars: 'Estrelas'
    },
  },
  en: {
    profile: 'Profile',
    role: 'Fullstack Developer (.NET & Vue.js)',
    tabs: {
      about: 'About',
      projects: 'Projects'
    },
    about: {
      summary_title: 'Summary',
      summary_text: 'Fullstack Developer specializing in the .NET ecosystem and Vue.js, with technical mastery in <a href="https://vlang.io/" target="_blank">V (Vlang)</a> for high-performance solutions. Focused on scalable architectures and legacy system modernization.',
      skills_title: 'Skills',
      skills: {
        backend: 'Backend: C#, .NET 9, <a href="https://vlang.io/" target="_blank">V (Vlang)</a>, Node.js',
        frontend: 'Frontend: Vue.js, TypeScript, React',
        database: 'Database: SQL Server, PostgreSQL, MongoDB',
        devops: 'DevOps: Docker, Nginx, GitFlow'
      }
    },
    projects: {
      highlights_title: 'Highlights',
      brasilapi_desc: '<a href="https://vlang.io/" target="_blank">V</a> SDK for integration with national services.',
      tabua_desc: 'Public REST API for tide monitoring (in <a href="https://vlang.io/" target="_blank">V</a>).',
      json2v_desc: 'Tool that converts JSON into <a href="https://vlang.io/" target="_blank">V (Vlang)</a> structs.',
      aceitatempo_desc: 'Browser extension that converts a product\'s price into the hours of work needed to afford it.',
      all_repos: 'Selected Projects',
      view_all_github: 'View all repositories on GitHub',
      language: 'Language',
      stars: 'Stars'
    },
  }
}

const i18n = createI18n({
  legacy: false, // usa Composition API
  locale: 'pt',
  fallbackLocale: 'en',
  messages
})

export default i18n
