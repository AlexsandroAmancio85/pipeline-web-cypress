# 🤖 MC6 Pipeline - Automação de Testes Web

<div align="center">

[![Cypress](https://img.shields.io/badge/Cypress-14.5.4-06B6D4?style=flat&logo=cypress)](https://cypress.io)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat&logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat)](LICENSE)

**Projeto simples e robusto de automação de testes web com Cypress**

[Sobre](#sobre) • [Quick Start](#quick-start) • [Testes](#testes) • [Estrutura](#estrutura) • [Contribuindo](#contribuindo)

</div>

---

## 📋 Sobre

MC6 Pipeline é uma suite completa de **testes end-to-end (E2E)** para a aplicação [Automation Practice](https://automationpratice.com.br/). O projeto valida fluxos críticos de usuário como login e cadastro, garantindo a qualidade e confiabilidade da plataforma.

### ✨ Principais características

- ✅ Testes de login com validações de email e senha
- ✅ Testes de cadastro de usuário com validações completas
- ✅ Validação de mensagens de erro em tempo real
- ✅ Suite executável em modo headless ou interativo
- ✅ Integração com GitHub Actions (CI/CD)

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** v18+ ([Download](https://nodejs.org))
- **npm** ou **yarn** (inclusos com Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/AlexsandroAmancio85/mc6-pipeline.git
cd mc6-pipeline

# Instale as dependências
npm install
```

### Executar Testes

```bash
# Executa todos os testes em modo headless
npm run test

# Abre o Cypress com interface gráfica (recomendado para desenvolvimento)
npm run test:open
```

---

## 🧪 Testes

### Testes de Login
**Arquivo:** `cypress/e2e/login.cy.js`

| Teste | Descrição |
|-------|-----------|
| ✅ Exibir formulário de login | Valida se o formulário é exibido corretamente |
| ✅ Login com credenciais válidas | Testa login bem-sucedido |
| ✅ Email inválido | Valida mensagem de erro para email inválido |
| ✅ Senha vazia | Valida mensagem de erro para senha omitida |
| ✅ Senha com poucos dígitos | Valida restrição de comprimento mínimo da senha |

### Testes de Cadastro de Usuário
**Arquivo:** `cypress/e2e/register.cy.js`

| Teste | Descrição | Validação |
|-------|-----------|-----------|
| ✅ Exibir formulário de cadastro | Verifica visibilidade do formulário | Elementos do form existem |
| ✅ Nome não preenchido | Valida obrigatoriedade do nome | `O campo nome deve ser prenchido` |
| ✅ Email vazio | Valida obrigatoriedade do email | `O campo e-mail deve ser prenchido corretamente` |
| ✅ Email inválido | Valida formato do email | `O campo e-mail deve ser prenchido corretamente` |
| ✅ Senha vazia | Valida obrigatoriedade da senha | `O campo senha deve ter pelo menos 6 dígitos` |
| ✅ Senha com menos de 6 dígitos | Valida comprimento mínimo | `O campo senha deve ter pelo menos 6 dígitos` |
| ✅ Todos os campos vazios | Valida múltiplas validações simultâneas | Todas as mensagens aparecem |
| ✅ Cadastro com sucesso | Testa fluxo completo de cadastro | Mensagem de sucesso exibida |

---

## 📁 Estrutura do Projeto

```
mc6-pipeline/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js              # Testes de autenção
│   │   └── register.cy.js           # Testes de cadastro
│   ├── support/                     # Configurações e comandos customizados
│   └── downloads/                   # Downloads durante execução dos testes
├── github/
│   └── workflows/
│       └── test.yml                 # Pipeline CI/CD (GitHub Actions)
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências do projeto
├── package-lock.json                # Lock file das dependências
├── .gitignore                       # Arquivos ignorados pelo Git
└── README.md                        # Este arquivo
```

---

## ⚙️ Configuração

### Cypress Config (`cypress.config.js`)

```javascript
{
  baseUrl: 'https://automationpratice.com.br/',  // URL da aplicação
  projectId: "hym3wk",                            // Integração com Dashboard
  chromeWebSecurity: false,                       // Disable CORS
}
```

### Variáveis de Ambiente

Adicione no `cypress.config.js` se necessário:

```javascript
env: {
  apiUrl: 'https://api.example.com',
  email: 'seu-email@example.com',
}
```

---

## 🔄 CI/CD Pipeline

O projeto utiliza **GitHub Actions** para executar os testes automaticamente:

**Arquivo:** `.github/workflows/test.yml`

- ✅ Executa em cada push para `main`
- ✅ Executa em todos os pull requests
- ✅ Gera relatórios de cobertura
- ✅ Mantém histórico de execuções

---

## 📊 Relatórios e Artefatos

Após executar os testes:

```
cypress/
├── videos/        # Gravações de vídeos dos testes (quando falham)
├── screenshots/   # Screenshots de falhas
└── downloads/     # Arquivos baixados durante testes
```

---

## 🛠️ Troubleshooting

### Testes falhando localmente mas passando no CI?

1. Verifique a versão do Node.js: `node --version`
2. Limpe cache: `npm cache clean --force`
3. Reinstale dependências: `rm -rf node_modules && npm install`

### Cypress não consegue conectar à URL?

```bash
# Verifique a conectividade
curl https://automationpratice.com.br/
```

### Timeout nos testes?

Aumente o timeout em `cypress.config.js`:

```javascript
defaultCommandTimeout: 10000,  // 10 segundos
pageLoadTimeout: 30000,        // 30 segundos
```

---

## 📚 Recursos Úteis

- 📖 [Documentação Cypress](https://docs.cypress.io)
- 🎥 [Cypress University](https://learn.cypress.io)
- 🐛 [Reportar Issues](https://github.com/AlexsandroAmancio85/mc6-pipeline/issues)

---

## 👨‍💻 Desenvolvido por

**Alexsandro Amancio**
[GitHub](https://github.com/AlexsandroAmancio85) • [LinkedIn](#)

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

<div align="center">

⭐ Se este projeto foi útil, considere dar uma estrela!

Made with ❤️ for quality testing

</div>
