import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessageService {

  private errorMessages = {
    required: 'Campo obrigatório',
    bsDate: 'Data inválida'
  };

  public getValidationMessage(validation: string): string {
    return this.errorMessages[validation];
  }

}
