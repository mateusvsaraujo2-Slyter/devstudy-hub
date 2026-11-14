# DevStudy Hub

Projeto desenvolvido para praticar Git, GitHub e o fluxo colaborativo de desenvolvimento.

## Sobre o projeto

O **DevStudy Hub** é uma página web simples que reúne categorias de estudo em tecnologia.

O objetivo principal é aplicar conceitos de versionamento, branches, commits, Issues, Pull Requests e documentação

## Sumário

- [Funcionalidades](#funcionalidades)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Fluxo Git](#fluxo-git)
- [Issues e entregas](#issues-e-entregas)
- [Documentação](#documentação)
- [Checklist](#checklist)
- [GitHub Pages](#github-pages)
- [Aprendizados e dificuldades](#aprendizados-e-dificuldades)

## Funcionalidades

- Exibição de categorias: Linux, Redes, Git/GitHub e DevOps.
- Botão interativo para mostrar ou ocultar categorias.
- Links para o repositório e os relatórios.

**Tecnologias utilizadas:** HTML, CSS, JavaScript, Git, GitHub e Markdown

## Estrutura do projeto

```text
devstudy-hub/
├── README.md
├── .gitignore
├── docs/
│   ├── index.html
│   ├── app.js
│   └── relatorios/
│       └── 01 a 05 — Relatórios das etapas
└── evidencias/
    └── 01 a 05 — Capturas de tela
```

## Como executar

Clone o repositório e abra a página no navegador:

```bash
git clone https://github.com/mateusvsaraujo2-Slyter/devstudy-hub.git
cd devstudy-hub
xdg-open docs/index.html
```

A aplicação não necessita de instalações adicionais para funcionar no navegador.

## Fluxo Git

Durante o desenvolvimento, utilizamos o seguinte processo:

1. Criar uma Issue.
2. Criar uma branch para desenvolver a tarefa.
3. Realizar alterações e registrar commits.
4. Enviar a branch ao GitHub.
5. Abrir uma Pull Request e revisar as alterações.
6. Realizar o merge na `main` e limpar a branch utilizada.

Exemplo:

```bash
git switch -c feature/nova-tarefa
git add .
git commit -m "Implementa nova tarefa"
git push -u origin feature/nova-tarefa
```

## Issues e entregas

| Issue | Entrega | Situação |
|---|---|---|
| [#1](https://github.com/mateusvsaraujo2-Slyter/devstudy-hub/issues/1) | Estrutura inicial | Concluída |
| [#2](https://github.com/mateusvsaraujo2-Slyter/devstudy-hub/issues/2) | Documentação | Em andamento |
| [#3](https://github.com/mateusvsaraujo2-Slyter/devstudy-hub/issues/3) | Página e GitHub Pages | Em andamento |

## Documentação

Relatórios com explicações e evidências:

- [Parte 1 — Planejamento](docs/relatorios/01-planejamento.md)
- [Parte 2 — Estrutura inicial](docs/relatorios/02-estrutura-inicial.md)
- [Parte 3 — Histórico Git](docs/relatorios/03-historico-git.md)
- [Parte 4 — Branches e Pull Requests](docs/relatorios/04-branches-pull-requests.md)
- [Parte 5 — Stash e investigação](docs/relatorios/05-stash-investigacao.md)

## Checklist

- [x] Criar repositório e Issues
- [x] Desenvolver página com JavaScript
- [x] Registrar commits significativos
- [x] Utilizar branches e Pull Requests
- [x] Praticar stash e comandos de investigação.
- [x] Documentar as Partes 1 a 10.
- [x] Publicar a página no GitHub Pages
- [x] Criar tag de versão.
- [x] Concluir Wiki e troubleshooting
- [x] Realizar validação final


## GitHub Pages

O DevStudy Hub está publicado e pode ser acessado pelo link:

[**Acessar DevStudy Hub**](https://mateusvsaraujo2-slyter.github.io/devstudy-hub/)

A página apresenta as categorias de estudo e os relatórios
das dez etapas do projeto


## Aprendizados e dificuldades

**Aprendizados:** utilização de Git e GitHub para versionar arquivos, organizar tarefas, trabalhar com branches e revisar Pull Requests.

**Dificuldades:** corrigir caminhos de arquivos, interpretar erros do terminal e organizar commits e evidências
Essas dificuldades contribuíram para melhorar nossa compreensão do fluxo Git.

## Referências

- [Repositório no GitHub](https://github.com/mateusvsaraujo2-Slyter/devstudy-hub)
- [Pull Requests](https://github.com/mateusvsaraujo2-Slyter/devstudy-hub/pulls)
- [Projeto final — Issue #266](https://github.com/tech-devops-ltda/DevOps/issues/266)
