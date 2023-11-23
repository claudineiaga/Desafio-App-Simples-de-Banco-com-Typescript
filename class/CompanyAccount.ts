import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (emprestimo: number): void => {
    if (this.getStatus() == true) {
      this.setEmprestimo(emprestimo)
      console.log('Voce pegou um empréstimo')
    } else {
      this.setEmprestimo(0)
      console.log("Não tem saldo ou não pode sacar");
    }
  }
}
