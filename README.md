<<<<<<< HEAD
# Portfólio profissional

Portfólio responsivo feito com React e Vite. Os dados pessoais, competências e projetos estão separados dos componentes para facilitar a personalização e a manutenção.

## Personalizar

Edite `src/data/portfolio.js` para atualizar nome, email, localização, competências, projetos e respetivos links.

Para adicionar fotos, coloque os ficheiros em `public/projects` e indique o caminho em `image`, por exemplo:

```js
image: '/projects/painel.jpg',
imageAlt: 'Ecrã principal da aplicação',
```

Para cada projeto, configure `githubUrl` e/ou `liveUrl` para mostrar os links do repositório e da aplicação publicada. Atualize também o título e a descrição em `index.html`.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Deploy no Render

O ficheiro `render.yaml` configura um **Static Site**:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Node.js: `22.12.0`
- Rewrite para servir a aplicação em todas as rotas

Para publicar manualmente:

1. Envie o projeto atualizado para um repositório GitHub.
2. No Render, escolha **New → Static Site** e ligue esse repositório.
3. Use a branch `main` e confirme os comandos e a pasta acima; ou crie o serviço através do Blueprint para ler o `render.yaml`.
4. Clique em **Create Static Site**.

### Variáveis de ambiente

A aplicação não precisa de variáveis de ambiente próprias, chaves API ou segredos.

O `render.yaml` define `NODE_VERSION=22.12.0` apenas para fixar a versão de Node.js usada no build. Se configurar o serviço manualmente no dashboard, adicione esta variável nas definições do Render para usar a mesma versão.

O build de produção também pode ser gerado localmente com `npm run build`; os ficheiros resultantes ficam na pasta `dist`.
=======
 (ES6+) · React Router · Bootstrap 5.3 (tema claro)

## Como correr localmente

    git clone https://github.com/linnkjoe/<nome-do-repo>.git
    cd <nome-do-repo>
    npm install
    npm start

## Contacto

- LinkedIn: https://www.linkedin.com/in/linnkjoe/
- GitHub: [@linnkjoe](https://github.com/linnkjoe)
- Email: jnelio312@gmail.com
>>>>>>> 685936b559892e71983318ffa073f482ceec5941
