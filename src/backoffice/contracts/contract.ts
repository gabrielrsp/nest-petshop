export interface Contract {
  error: any[];
  validate(model: any): boolean;
}