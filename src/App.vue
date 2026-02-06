<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentTab = ref('sobre')
const repos = ref<any[]>([])

const targetRepos = [
  'sdk_gemini',
  'tabua_mare_api',
  'json2V',
  'MaisFocoSolution',
  'WindowsRegistry',
  'vbrasil-api',
  'sdkbuilder',
  'BabyDicionario'
]

const filteredRepos = computed(() => {
  return repos.value.filter(repo => 
    targetRepos.some(target => repo.name.toLowerCase() === target.toLowerCase())
  ).sort((a, b) => b.stargazers_count - a.stargazers_count)
})

const totalStars = computed(() => {
  return repos.value.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
})

const fetchRepos = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Ddiidev/repos?sort=updated&per_page=100')
    repos.value = await response.json()
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
  }
}

fetchRepos()
</script>

<template>
  <div class="container">
    <div class="top-bar">
      <div class="github-stats">
        <i class="nes-octocat animate"></i>
        <div class="stars-container">
          <i class="nes-icon star is-medium"></i>
          <span class="star-count">{{ totalStars }}</span>
        </div>
      </div>

      <div class="language-options">
        <label>
          <input type="radio" class="nes-radio" name="language" value="pt" v-model="locale" />
          <span>PT-BR</span>
        </label>
        <label>
          <input type="radio" class="nes-radio" name="language" value="en" v-model="locale" />
          <span>EN</span>
        </label>
      </div>
    </div>

    <header class="nes-container is-dark with-title">
      <p class="title">{{ t('profile') }}</p>
      <div class="profile-header">
        <img src="./assets/profile.png" alt="André Luiz" class="nes-avatar is-rounded is-large" style="image-rendering: pixelated;" />
        <div class="details">
          <h1>André Luiz</h1>
          <p>{{ t('role') }}</p>
          <div class="social-links">
            <a href="https://github.com/Ddiidev" target="_blank" class="nes-icon github is-medium"></a>
            <a href="https://www.linkedin.com/in/andreluizss/" target="_blank" class="nes-icon linkedin is-medium"></a>
            <a href="https://www.youtube.com/@mais.foco42" target="_blank" class="nes-icon youtube is-medium"></a>
          </div>
        </div>
      </div>
    </header>

    <nav class="tab-nav">
      <button 
        type="button" 
        class="nes-btn" 
        :class="{ 'is-primary': currentTab === 'sobre' }"
        @click="currentTab = 'sobre'"
      >
        {{ t('tabs.about') }}
      </button>
      <button 
        type="button" 
        class="nes-btn" 
        :class="{ 'is-primary': currentTab === 'projetos' }"
        @click="currentTab = 'projetos'"
      >
        {{ t('tabs.projects') }}
      </button>
    </nav>

    <main class="content-area nes-container is-rounded">
      
      <!-- ABA SOBRE -->
      <section v-if="currentTab === 'sobre'" class="about-section">
        <div class="nes-container with-title">
          <p class="title">{{ t('about.summary_title') }}</p>
          <p v-html="t('about.summary_text')"></p>
        </div>

        <!-- Destaques agora no Sobre -->
        <div class="nes-container is-dark with-title mt-4 mb-4">
          <p class="title">{{ t('projects.highlights_title') }}</p>
          <div class="highlight-project">
            <h3>BrasilAPI SDK (Vlang)</h3>
            <p v-html="t('projects.brasilapi_desc')"></p>
          </div>
          <div class="highlight-project">
            <h3>Tabua de Maré API</h3>
            <p v-html="t('projects.tabua_desc')"></p>
          </div>
        </div>

        <div class="nes-container with-title mt-4">
          <p class="title">{{ t('about.skills_title') }}</p>
          <div class="lists">
            <ul class="nes-list is-disc">
              <li v-html="t('about.skills.backend')"></li>
              <li>{{ t('about.skills.frontend') }}</li>
              <li>{{ t('about.skills.database') }}</li>
              <li>{{ t('about.skills.devops') }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ABA PROJETOS -->
      <section v-if="currentTab === 'projetos'" class="projects-section">
        <h3>{{ t('projects.all_repos') }}</h3>
        <div v-for="repo in filteredRepos" :key="repo.id" class="nes-container is-rounded mb-2 repo-card">
          <div class="repo-header">
            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            <span class="nes-badge is-splited">
              <span class="is-dark">{{ repo.language || 'Code' }}</span>
              <span class="is-primary">{{ repo.stargazers_count }} ★</span>
            </span>
          </div>
          <p class="repo-desc">{{ repo.description }}</p>
        </div>

        <div class="view-all-container mt-4">
          <a href="https://github.com/Ddiidev?tab=repositories" target="_blank" class="nes-btn is-primary">
            {{ t('projects.view_all_github') }}
          </a>
        </div>
      </section>

    </main>

    <footer class="footer">
      <p>
        <span class="nes-text is-primary">{{ t('footer.year') }}</span> - André Luiz
      </p>
    </footer>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.language-options {
  display: flex;
  gap: 15px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.details h1 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.github-stats {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nes-octocat {
  transform: scale(0.7);
  transform-origin: left center;
}

.stars-container {
  display: flex;
  align-items: center;
  gap: 5px;
}

.nes-icon.star.is-large {
  transform: scale(0.9);
  transform-origin: center;
}

.star-count {
  font-size: 1.2rem;
  color: #f7d51d; /* Amarelo NES */
  text-shadow: 2px 2px #000;
}

.view-all-container {
  text-align: center;
  margin-top: 30px;
}

.tab-nav {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.mt-4 { margin-top: 2rem; }
.mb-4 { margin-bottom: 2rem; }
.mb-2 { margin-bottom: 1rem; }

.repo-card {
  padding: 1rem;
}

.repo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.repo-header a {
  color: #209cee;
  text-decoration: none;
}

.repo-desc {
  font-size: 0.8rem;
  color: #666;
}

.footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px;
}
</style>
