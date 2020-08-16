import { Directive, Input, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
/**
 * Diretiva utilizada para alterar o status dos FormControl's de um FormGroup de touched para untouched.
 * Pode ser utilizada por exemplo, no botão que será responsável por persistir os dados informados pelo usuário
 * para ativar as mensagens de erro do formulário quando o mesmo estiver inválido.
 *
 * Exemplo de uso:
 *
 * @example
 * <button
 *                class="btn-custom btn-custom-primary mx-1"
 *                type="submit"
 *                formButtonSubmit
 *                [submittedForm]="transactionForm"
 *                (click)="saveForm()">
 *                  <fa-icon
 *                    [icon]="faSave"
 *                    class="btn-icon">
 *                  </fa-icon>
 *                  Salvar
 * </button>
 *
 */
@Directive({
  selector: '[formButtonSubmit]'
})
export class FormButtonSubmitDirective {

  /**
   * Formulário que deve ser passado a diretiva.
   */
  @Input() submittedForm: FormGroup;

  /**
   * Responsável por tratar os eventos de click.
   */
  @HostListener('click')
  handleClickEvent() {
    this.markAsTouched(this.submittedForm);

  }

  /**
   * Metódo que realiza a alteração de status dos controles do FormGroup.
   * @param formGroup
   */
  private markAsTouched(formGroup: FormGroup) {
    formGroup.markAsTouched();
    formGroup.updateValueAndValidity();

    (Object as any).values(formGroup.controls).forEach(
      control => {

        control.markAsTouched();
        control.updateValueAndValidity({ onlySelf: false, emitEvent: true});

        if (control.controls) {
          this.markAsTouched(control);
        }
    });
  }
}
