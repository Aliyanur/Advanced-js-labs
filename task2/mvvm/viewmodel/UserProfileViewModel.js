import { ViewModel } from '../base/ViewModel.js';

export class UserProfileViewModel extends ViewModel {
  constructor() {
    super();

    this.defineProperty('firstName', '');
    this.defineProperty('lastName', '');
    this.defineProperty('email', '');
    this.defineProperty('errors', {});

    this.$watch('firstName', () => this.validate());
    this.$watch('lastName', () => this.validate());
    this.$watch('email', () => this.validate());
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  validate() {
    const errors = {};

    if (!this.firstName) errors.firstName = 'Required';
    if (!this.lastName) errors.lastName = 'Required';
    if (!this.email.includes('@')) errors.email = 'Invalid';

    this.errors = errors;
  }

  get isValid() {
    return Object.keys(this.errors).length === 0;
  }
}