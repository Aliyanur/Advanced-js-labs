export class UserProfileForm {
    constructor(containerId, vm) {
      this.container = document.getElementById(containerId);
      this.vm = vm;
    }
  
    render() {
      this.container.innerHTML = `
        <input data-field="firstName" placeholder="First name" value="${this.vm.firstName}">
        <input data-field="lastName" placeholder="Last name" value="${this.vm.lastName}">
        <input data-field="email" placeholder="Email" value="${this.vm.email}">
        
        <p>${this.vm.fullName}</p>
        <p>${this.vm.isValid ? 'Valid' : 'Invalid'}</p>
      `;
  
      this.bind();
    }
  
    bind() {
      this.container.addEventListener('input', e => {
        const field = e.target.dataset.field;
        if (field) this.vm[field] = e.target.value;
      });
  
      ['firstName', 'lastName', 'email', 'errors'].forEach(f =>
        this.vm.$watch(f, () => this.render())
      );
    }
  }