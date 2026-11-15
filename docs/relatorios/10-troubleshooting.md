# Parte 10 — Troubleshooting com Git

## 1. Objetivo

Praticar a identificação e resolução de três problemas comuns durante o versionamento de arquivos com Git.

## 2. Problemas e soluções

### Cenário 1 — Branch errada

- **Sintoma:** alteração realizada na branch incorreta.
- **Estado atual:** `docs/index.html` modificado, sem commit.
- **Evidência:** comandos `git status` e `git diff`.
- **Hipótese:** a alteração foi iniciada antes da criação da branch correta.
- **Ação:** criamos outra branch utilizando `git switch -c`.
- **Resultado:** a alteração foi preservada na nova branch.
- **Validação:** confirmamos a modificação com `git status` e removemos o conteúdo fictício.

### Cenário 2 — Arquivo versionado indevidamente

- **Sintoma:** um arquivo interno foi adicionado ao histórico Git.
- **Estado atual:** arquivo rastreado e registrado em um commit.
- **Evidência:** comandos `git ls-files` e `git status`.
- **Hipótese:** o arquivo foi incluído por engano no versionamento.
- **Ação:** utilizamos `git rm --cached` e atualizamos o `.gitignore`.
- **Resultado:** o arquivo deixou de ser rastreado, permanecendo no histórico anterior.
- **Validação:** o `git ls-files` não apresentou o arquivo, que continuou existindo localmente.

### Cenário 3 — Commit perdido

- **Sintoma:** commit deixou de aparecer no histórico da branch.
- **Estado atual:** `HEAD` apontava para o commit anterior.
- **Evidência:** `git log` e `git reflog`.
- **Hipótese:** o comando `git reset --hard HEAD~1` moveu a referência da branch.
- **Ação:** recuperamos o commit com `git reset --hard 09ef038`.
- **Resultado:** o commit voltou ao histórico da branch.
- **Validação:** `git log` confirmou o commit e `ls -l recuperacao-teste.txt` confirmou o arquivo restaurado.

## 3. Resultado

Concluímos as três simulações com sucesso, sem modificar a branch principal do projeto.

## 4. Aprendizados

Aprendemos a corrigir alterações realizadais na branch errada, interromper o rastreamento de arquivos e recuperar commits utilizando o histórico local do Git.
