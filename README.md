# 🚀 Smart Task Manager (Dark Mode)

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## 📌 Sobre o Projeto
O **Smart Task Manager** é uma aplicação robusta de gerenciamento de tarefas (To-Do List) desenvolvida com foco em **UI/UX** e persistência de dados. O sistema utiliza um tema escuro moderno e organiza as atividades em tabelas dinâmicas para melhor visualização.

## ✨ Funcionalidades
- **Persistência Local:** Utiliza `localStorage` para que as tarefas não sejam perdidas ao fechar o navegador.
- **Interatividade:** Adição de tarefas via botão ou tecla **Enter**.
- **Histórico com Timestamp:** Registro automático de data e hora no momento da conclusão da tarefa.
- **Gestão de Ciclo de Vida:** Possibilidade de marcar como concluído, excluir pendentes ou limpar o histórico de concluídos.
- **Interface Dark Mode:** Design moderno utilizando tabelas estruturadas para organização visual.

## 🛠️ Conceitos Técnicos Aplicados
- **Manipulação de DOM:** Criação e remoção dinâmica de elementos HTML (`tr`, `td`, `button`).
- **Event Listeners:** Captura de eventos de teclado e cliques.
- **Manipulação de Arrays de Objetos:** Lógica de transferência de dados entre listas de "Pendentes" e "Concluídos".
- **Objeto Date:** Formatação de data e hora em tempo real no padrão brasileiro (`toLocaleDateString`).
- **JSON Handling:** Conversão de dados para salvamento em formato string no navegador.

## 🚀 Como Executar
1. Clone o repositório:
   ```bash
   git clone [https://github.com/RicardoAlmeida06/smart-task-manager.git](https://github.com/RicardoAlmeida06/smart-task-manager.git)
   
2. Abra o arquivo index.html em seu navegador preferido.
