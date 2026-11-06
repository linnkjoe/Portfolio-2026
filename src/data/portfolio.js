export const profile = {
  name: 'Nélio Moanga',
  role: 'Desenvolvedor de Software',
  email: 'jnelio312@gmail.com',
  location: 'Moçambique · Disponível para oportunidades',
}

export const skillGroups = [
  {
    title: 'Backend & APIs',
    description: 'Serviços seguros, escaláveis e bem estruturados.',
    icon: 'code',
    skills: [
      { name: 'Java 17+ · Spring Boot', level: 90 },
      { name: 'Arquitetura de APIs RESTful', level: 92 },
      { name: 'Spring Security & Authentication', level: 85 },
    ],
  },
  {
    title: 'Bases de Dados',
    description: 'Dados consistentes, modelados para crescer.',
    icon: 'database',
    skills: [
      { name: 'Oracle PL/SQL', level: 88 },
      { name: 'MySQL / MariaDB', level: 90 },
      { name: 'Modelagem Relacional (DER)', level: 92 },
    ],
  },
  {
    title: 'Frontend & UI',
    description: 'Interfaces responsivas com foco na experiência.',
    icon: 'layers',
    skills: [
      { name: 'Bootstrap 5', level: 95 },
      { name: 'React.js', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    title: 'DevOps & Qualidade',
    description: 'Boas práticas do desenvolvimento à entrega.',
    icon: 'terminal',
    skills: [
      { name: 'Git & GitHub Workflow', level: 92 },
      { name: 'Docker & Conteinerização', level: 78 },
      { name: 'Testes (JUnit, Mockito)', level: 85 },
      { name: 'CI/CD & Deploy (Vercel)', level: 80 },
    ],
  },
]

export const projects = [
  {
    number: '01',
    category: 'Backend · API REST',
    title: 'Motel Management API — Java, Spring Boot',
    description:
      'API REST para gestão de uma guesthouse/motel: cobre o ciclo completo de reservas, desde a gestão de quartos e disponibilidade até à administração de utilizadores.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    image: '/projects/api-motel.png',
    imageAlt: 'Imagem do Swagger da API de gestão de reservas em motelaria',
    githubUrl: 'https://github.com/linnkjoe/guest-house-api',
    liveUrl: '',
    accent: 'mint',
    icon: 'chart',
  },
  {
    number: '02',
    category: 'Full Stack · Aplicação web',
    title: 'Motel Management System (aplicação web full-stack)',
    description:
      'Aplicação web para gestão de guesthouse/motel, com interface em React ligada a uma API REST em Spring Boot. Permite aos clientes consultar quartos e fazer reservas, e à equipa gerir todo o ciclo da estadia, do check-in ao check-out.',
    stack: ['React', 'REST API', 'Bootstrap'],
    image: '/projects/liveapp.png',
    imageAlt: 'Imagem do painel de gestão de projetos',
    githubUrl: '',
    liveUrl: 'https://mabjaia-inn-motel-guesthouse-frontend.onrender.com/',
    accent: 'blue',
    icon: 'grid',
  },
  
]
