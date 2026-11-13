# Parte 10 — Troubleshooting com Git

## 1. Objetivo

Praticar a identificação e resolução de três problemas comuns durante o versionamento de arquivos com Git.

## 2. Problemas e soluções

### Cenário 1 — Branch errada

**Problema:** uma alteração foi realizada na branch incorreta.

**Investigação:** utilizamos `git status` e `git diff` para identificar o arquivo modificado.

**Solução:** criamos uma nova branch com `git switch -c`, preservando a alteração não commitada.

**Validação:** confirmamos que a alteração acompanhou a nova branch e depois removemos o conteúdo fictício.

### Cenário 2 — Arquivo versionado indevidamente

**Problema:** um arquivo interno foi adicionado ao histórico Git por engano.

**Investigação:** utilizamos `git ls-files` e `git status` para confirmar o rastreamento.

**Solução:** executamos `git rm --cached` e adicionamos uma regra ao `.gitignore`.

**Validação:** o arquivo deixou de ser rastreado, mas permaneceu no computador.

### Cenário 3 — Commit perdido

**Problema:** simulamos a perda de um commit utilizando `git reset --hard HEAD~1`.

**Investigação:** localizamos o commit `09ef038` utilizando `git reflog`.

**Solução:** recuperamos o commit com `git reset --hard 09ef038`.

**Validação:** o commit voltou ao histórico da branch e o arquivo de teste foi restaurado.

## 3. Resultado

Concluímos as três simulações com sucesso, sem modificar a branch principal do projeto.

## 4. Aprendizados

Aprendemos a corrigir alterações realizadas na branch errada, interromper o rastreamento de arquivos e recuperar commits utilizando o histórico local do Git.