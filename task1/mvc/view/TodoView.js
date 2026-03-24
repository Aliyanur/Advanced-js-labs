export class TodoView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
  
      this.onAddTodo = null;
      this.onToggleTodo = null;
      this.onDeleteTodo = null;
      this.onEditTodo = null;
    }
  
    render(todos) {
      this.container.innerHTML = `
        <h1>Todo MVC</h1>
        <form id="form">
          <input id="input" placeholder="New todo" />
          <button>Add</button>
        </form>
        <ul>
          ${todos.map(t => `
            <li data-id="${t.id}">
              <input type="checkbox" ${t.completed ? 'checked' : ''} data-action="toggle"/>
              <span data-action="edit">${t.text}</span>
              <button data-action="delete">X</button>
            </li>
          `).join('')}
        </ul>
      `;
  
      this.attachEvents();
    }
  
    attachEvents() {
      const form = this.container.querySelector('#form');
  
      form.addEventListener('submit', e => {
        e.preventDefault();
        const input = form.querySelector('#input');
  
        if (input.value && this.onAddTodo) {
          this.onAddTodo(input.value);
          input.value = '';
        }
      });
  
      this.container.addEventListener('click', e => {
        const li = e.target.closest('li');
        if (!li) return;
  
        const id = Number(li.dataset.id);
        const action = e.target.dataset.action;
  
        if (action === 'toggle') this.onToggleTodo(id);
        if (action === 'delete') this.onDeleteTodo(id);
        if (action === 'edit') {
          const text = prompt('Edit todo');
          if (text) this.onEditTodo(id, text);
        }
      });
    }
  }