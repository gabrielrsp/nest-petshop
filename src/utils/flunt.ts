export class Flunt {
  constructor(public errors: any[] = []) { }

  isRequired(value, message) {
    if (!value || value.length <= 0) {
      this.errors.push(message);
    }
  }

  hasMinLen = (value, min, message) => {
    if (!value || value.length < min) {
      this.errors.push(message);
    }
  }

  hasMaxLen = (value, max, message) => {
    if (!value || value.length > max) {
      this.errors.push(message);
    }
  }
}